"""
___init__.py for airsenal
"""

import os
import toml

# Get the directory path of the current script
current_dir = os.path.dirname(os.path.abspath(__file__))

# Construct the path to pyproject.toml by navigating one directory up
pyproject_path = os.path.join(current_dir, '..', 'pyproject.toml')

# Load pyproject.toml file
with open(pyproject_path, 'r') as file:
    pyproject = toml.load(file)

# Access the version from the tool.poetry section
version = pyproject['tool']['poetry']['version']

print("AIrsenal project version:", version)
