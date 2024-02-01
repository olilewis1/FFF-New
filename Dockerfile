FROM python:3.11-slim-buster

# Install system dependencies
RUN apt-get update && \
    apt-get install build-essential git curl -y

# Install Poetry
RUN curl -sSL https://install.python-poetry.org | python3 -
ENV PATH="${PATH}:/root/.local/bin"

# Set up the working directory
WORKDIR /airsenal

# Copy the project files
COPY pyproject.toml poetry.lock /airsenal/

# Install dependencies
RUN poetry install --no-interaction --no-ansi

# Set the entrypoint
CMD ["sh", "-c", "FPL_TEAM_ID=$FPL_TEAM_ID poetry run airsenal_run_pipeline"]
