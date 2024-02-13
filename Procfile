web: docker-compose run --rm experiment-1 poetry run gunicorn intense-mesa-52084:airsenal
worker: docker-compose run --rm experiment-1 sh -c '.heroku/install.sh && FPL_TEAM_ID=$FPL_TEAM_ID poetry run python your_script.py'
