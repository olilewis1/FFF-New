FROM python:3.11-slim-buster

RUN apt-get update && \
    apt-get install build-essential git sqlite3 curl -y && \
    curl -sSL https://install.python-poetry.org | python3 -

# Set up Poetry
ENV PATH="${HOME}/.poetry/bin:${PATH}"
WORKDIR /airsenal

# Install dependencies
COPY pyproject.toml poetry.lock /airsenal/
RUN poetry install --no-interaction --no-ansi

# Set the entrypoint
CMD ["sh", "-c", "FPL_TEAM_ID=$FPL_TEAM_ID poetry run airsenal_run_pipeline"]

