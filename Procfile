release: python manage.py makemigrations && python manage.py migrate
web: gunicorn api_5.wsgi
web: serve -s build