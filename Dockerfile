# Use the Python 3.11 slim buster base image
FROM python:3.11-slim-buster

# Install system dependencies
RUN apt-get update && \
    apt-get install build-essential git sqlite3 curl -y && \
    pip install -U setuptools poetry

# Set the working directory
WORKDIR /airsenal

# Create the named volume
VOLUME /airsenal_data

# Copy the application code into the container
COPY . /airsenal

# Install dependencies
RUN poetry install --extras "api"

# Define the command to run the application
CMD ["poetry", "run", "airsenal"]