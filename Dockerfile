FROM python:3.11-slim-buster

RUN apt-get update && \
    apt-get install build-essential git sqlite3 curl -y && \
    curl -sSL https://install.python-poetry.org | python3 -

# Add Poetry to the PATH
ENV PATH="/root/.poetry/bin:${PATH}"

WORKDIR /airsenal

COPY . /airsenal

RUN poetry install --extras "api"

CMD ["poetry", "run", "airsenal_run_pipeline"]