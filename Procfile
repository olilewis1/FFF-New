web: poetry run gunicorn intense-mesa-52084:airsenal  # Example for serving web requests using Gunicorn
worker: sh -c 'poetry install && FPL_TEAM_ID=$FPL_TEAM_ID poetry run airsenal_run_pipeline'  # Example for running the pipeline command in a worker process
