# Use the Python 3.11 slim buster base image
FROM python:3.11-slim-buster

# Install system dependencies
RUN apt-get update && \
    apt-get install build-essential git sqlite3 curl -y && \
    pip install -U setuptools poetry

# Set the working directory
WORKDIR /airsenal/airsenal

# Create the named volume
VOLUME /airsenal_data

# Copy the application code into the container
COPY . /airsenal/airsenal

# Install dependencies
RUN poetry install --extras "api"


# Create the directory if it doesn't exist
RUN mkdir -p /usr/src/app/static

# Set permissions for the directory and its contents
RUN chmod -R 755 /usr/src/app/static

# Set permissions for the airsenal/airsenal directory and its contents
RUN chmod -R 755 /usr/src/app/airsenal/airsenal


# Define the command to run the application
CMD ["poetry", "run", "airsenal_run_pipeline"]