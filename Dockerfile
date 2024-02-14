FROM python:3.11-slim-buster

FROM python:3.11-slim-buster

RUN apt-get update && \
    apt-get install build-essential git sqlite3 curl -y && \
    pip install -U setuptools poetry && \ poetry install --extras "api"

WORKDIR /airsenal

COPY . /airsenal

CMD ["poetry", "run", "airsenal_run_pipeline"]
