# test_assignment

The Test Assignment Development BackEnd Using Django - Express With Docker Compose and Machine

Featuring:

Docker v18.09.2
Docker Compose v1.23.2
Docker Machine v0.16.1
Python 3.11
Django 3.2
Nodejs 16
Express 4.17.13
PostgreSQL 12

## Setup Infra Local
1. Django backend:

```bash
$ cd django_backen
$ docker compose -f docker-compose.yml up postgres -d
$ setup env by:
    * pip install virtualenv
$ create , actvice and intall project env:
    * virtualenv env
    * base on your OS active your env. For windows: .\env\Scripts\activate
    * after active, run command: pip install -r requirements.txt

create supperuser
$ python manage.py createsuperuser

start the django server:
$ python manage.py runserver 5000

mirgate:

$ python manage.py makemigrations
$ python manage.py migrate

```

2. Express backend:

```bash
$ cd express_backend
$ docker compose -f docker-compose.yml build
$ docker compose -f docker-compose.yml up

```

Now, all services running:
for example:

CONTAINER ID   IMAGE                   COMMAND                  CREATED          STATUS                   PORTS                    NAMES
e135b0f786db   express_backend-proxy   "/usr/local/bin/mitm…"   9 minutes ago    Up 8 minutes             0.0.0.0:8080->8080/tcp   express_backend-proxy-1
fec780c46111   express_backend-app     "docker-entrypoint.s…"   9 minutes ago    Up 8 minutes             0.0.0.0:8000->8000/tcp   express_backend-app-1
dfdae316ba34   postgres:12             "docker-entrypoint.s…"   9 minutes ago    Up 9 minutes (healthy)   0.0.0.0:5433->5432/tcp   express_backend-db-1
dacdc7bc60d3   postgres:12             "docker-entrypoint.s…"   15 hours ago     Up 54 minutes            0.0.0.0:5432->5432/tcp   django_backend-postgres-1

