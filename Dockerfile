FROM python:3.11-slim-buster

RUN apt-get update && \
    apt-get install build-essential git sqlite3 curl -y && \
    curl -sSL https://install.python-poetry.org | python3 -

# Add Poetry to the PATH
ENV PATH="/root/.poetry/bin:${PATH}"

WORKDIR /airsenal

COPY . /airsenal

# Install Poetry
RUN curl -sSL https://install.python-poetry.org | python3 -

# Add Poetry binary to PATH
ENV PATH="${PATH}:/root/.poetry/bin"

# Manually install dependencies and set up the environment
RUN poetry config virtualenvs.create false \
    && poetry install --no-interaction --no-ansi

CMD ["poetry", "run", "airsenal_run_pipeline"]