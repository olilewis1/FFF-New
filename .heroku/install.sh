#!/bin/bash
set -e

# Install Poetry
curl -sSL https://install.python-poetry.org | python3 -

# Install project dependencies using Poetry
poetry install

# Activate the virtual environment
source ~/.poetry/env

# Run any additional setup commands here
