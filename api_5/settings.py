"""
Django settings for api_5 project.

Generated by 'django-admin startproject' using Django 3.2.23.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""

from pathlib import Path
import os
import dj_database_url
# import re

if os.path.exists('env.py'):
    import env


CLOUDINARY_STORAGE = {
    'CLOUDINARY_URL': os.environ.get('CLOUDINARY_URL')
}

# Standard media file to store images. Setting known where to store images.
MEDIA_URL = '/media/'

DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Credited from Code Institute API run through project.
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [(
        'rest_framework.authentication.SessionAuthentication'
        if 'DEV' in os.environ
        else 'dj_rest_auth.jwt_auth.JWTCookieAuthentication'
    )],

    # Set pagination for 10 to a page. Can be changed.
    'DEFAULT_PAGINATION_CLASS':
        'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,

    # Makes time and date look better. From DRF strftime format.
    'DATETIME_FORMAT': '%d %b %Y',
}

# Set defualt render for production environment.
if 'DEV' not in os.environ:
    REST_FRAMEWORK['DEFAULT_RENDERER_CLASSES'] = [
        'rest_framework.renderers.JSONRenderer',
    ]

REST_USE_JWT = True
JWT_AUTH_SECURE = True
JWT_AUTH_COOKIE = 'my-app-auth'
JWT_AUTH_REFRESH_COOKIE = 'my-refresh-token'

# Needed for deployment of frontend and backend to different platforms.
# Cookies would block it if thie not set to 'none'.
JWT_AUTH_SAMESITE = 'None'

# Links to serializer created in api_5.serializers.py file.
REST_AUTH_SERIALIZERS = {
    'USER_DETAILS_SERIALIZER': 'api_5.serializers.CurrentUserSerializer'
}


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!

SECRET_KEY = os.getenv('SECRET_KEY')
# SECRET_KEY = 'django-insecure-gf9oun_7gt%i3@ej$m%snop3kjea@a+ed_hch$y+%!(ftsa5w('

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = 'DEBUG' in os.environ
# True or False.

# ALLOWED_HOSTS = ['localhost', '8000-ajorgensen89-api5-4mxnlxxfqs2.ws-eu106.gitpod.io']
# 'localhost', 'api-5-5ba41198804f.herokuapp.com/',

ALLOWED_HOSTS = [
    'localhost', 'api-5-5ba41198804f.herokuapp.com/',
    os.environ.get('ALLOWED_HOSTS'),
    '8000-ajorgensen89-api5-bvkw79ojjvn.ws-eu106.gitpod.io',
    '3000-ajorgensen89-project5-artui0saqz4.ws-eu106.gitpod.io',
    ]

# '8000-ajorgensen89-api5-87quc0azmjk.ws-eu106.gitpod.io'
# Application definition

INSTALLED_APPS = [
    'rest_framework.authtoken',
    'dj_rest_auth',
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'dj_rest_auth.registration',
    'corsheaders',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'cloudinary_storage',
    'django.contrib.staticfiles',
    'cloudinary',
    'rest_framework',
    'django_filters',
    'profiles',
    'blurbs',
    'comments',
    'votes',
    'followers',
]

# Instructed by dj-rest-auth to add this.
SITE_ID = 1

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# Gunicorn.
# if 'CLIENT_ORIGIN' in os.environ:
#     CORS_ALLOWED_ORIGINS = [
#         os.environ.get('CLIENT_ORIGIN')
#     ]
# else:
#     CORS_ALLOWED_ORIGIN_REGEXES = [
#         r"^https://.*\.gitpod\.io$",
#     ]

# So API works with React frontend project.
# if 'CLIENT_ORIGIN_DEV' in os.environ:
#     extracted_url = re.match(
#         r'^.+-', os.environ.get(
#             'CLIENT_ORIGIN_DEV', ''), re.IGNORECASE).group(0)
#     CORS_ALLOWED_ORIGIN_REGEXES = [
#         rf"{extracted_url}(eu|us)\d+\w\.gitpod\.io$",
#     ]

CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOWED_ORIGINS = [
    os.environ.get("CLIENT_ORIGIN")
]

ROOT_URLCONF = 'api_5.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'api_5.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

if 'DEV' in os.environ:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }
else:
    DATABASES = {
        'default': dj_database_url.parse(os.environ.get("DATABASE_URL"))
    }
    print('connected')

# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_URL = '/static/'

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
