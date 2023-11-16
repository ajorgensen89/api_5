# Walking Seasons.
Project Idea

## Agile



<hr>

[Back to the top](#walking-seasons)

<hr>

# Django Rest Framwork for an application programming interface (API).

Install [Django Rest Framework](https://www.django-rest-framework.org/).<br>
- CLI input - **pip install djangorestframework**<br>
- Add to INSTALLED_APPS as - **'rest_framework',** (with comma).<br>
- APIviews used for extra functionality for receiving instances, handling errors and adding context to Response objects and instances.

This workspace holds the API developed, for use with connection to Project 5, for backend storage for user interface requests.<br>
This is built to hold models and display content using React for the frontend of the project named, Project 5.<br>
This project holds storage and responses for HTTP requests, JSON Web Tokens for authentication, permission and to tell user input apart from other user input.<br>
The Django Rest Framework replaces the use of many HTML pages and displays the information requests using the React Frontend project, Project 5.<br>


# CRUD.

CRUD stand for Create, Read, Undo and Delete. This is four interactions the developer or the user can have with a website on either the frontend or the backend.<br>
[Django Signal](https://code.djangoproject.com/wiki/Signals) can be used for creating, retrieving, viewing and deleting data.<br>
Delete<br>


## Serializers.
Data needs to be deserialized and serialized for the API to GET and POST details from the models in views using serializers from the Rest Framework.<br>
<img src="assets/images/readme-images/JSON select.png" width=50% height=50%><br>
As Applications are developed and models created. More serializers will be used to creat JSON files for data manipulation when sending and receiving from the backend to the frontend of the website.
<img src="assets/images/readme-images/JSON view.png" width=50% height=50%><br>

<br>


<hr>

[Back to the top](#walking-seasons)

<hr>

# Technologies.

Content includes a range of technologies to create the frontend and back end portions of this project to help function and to improve the development, aesthetics, functionality and compatability.<br>
<br>
Some installations are necessary and more can be added to improve the website service and usefulness.


## Github and Gitpod.

A workspace for coding was created in [Github](https://github.com/) and opened into the coding enviroment, [Gitpod](https://www.gitpod.io/).
[Github](https://github.com/) offers a platform and cloud-based service for software development and allows management and storage for code.
[Gitpod](https://www.gitpod.io/) is open source developer platform ready for coding. Adding, commiting and pushing new work can be completed from the Command Line Interface [CLI](https://www.freecodecamp.org/news/how-to-use-the-cli-beginner-guide/), aswell as installing new packages, libraries, frameworks or programmes with pre-written code that can introduce into a new project to improve it.


## Starting Installations.

Steps to take for Starting a [Django Rest Framework](https://www.django-rest-framework.org/) based [API](https://www.ibm.com/topics/api).<br>


### Django.

[Django](https://www.djangoproject.com/) is installed as the Python based web development framwork.<br>
[Django Signal](https://code.djangoproject.com/wiki/Signals) is used for profile creation. This includes the retrieval (create) and update (edit) operations for CRUD (create, read, undo or edit and delete).



### Cloudinary.

Connect Django to [Cloudinary](https://cloudinary.com/) for storage and delivery of media such as images.


### Pillow.

This [Pillow](https://python-pillow.org/) library adds capabilities to process images. **'P' in Pillow needs to be a capital when installing**.


<hr>

[Back to the top](#walking-seasons)

<hr>

### Intialise project.

Install [Django](https://www.djangoproject.com/) and intialise project in current directory of workspace using dot notation, **'.'** .<br>
Each application within the project is added further down.<br>
-  Enter into CLI: <br>
    -  **pip install django** ( pip3 install 'django<4>' - used here as prefered for Long Term Support (LTS)').
    -  **django-admin startproject name_here .** 'name_here' = 'api_5' for this project.<br>
    <img src="assets/images/readme-images/startproject.png" width=50% height=50%>
    -  **pip install django-cloudinary-storage**
    -  **pip install Pillow**
    <br>

-  Set up Cloudinary installations in 'api_5' **settings.py** under INSTALLED_APPS. See image.<br>
<img src="assets/images/readme-images/Cloudinary.png" width=50% height=50%>

- Create **env.py** file for production state to save variables to not be pushed to [Github](https://github.com/).<br>
**Final Image for all secret files connected into workspace.**<br>
    - Entry for Cloudinary in **settings.py**.<br>
    <img src="assets/images/readme-images/setcloud.png" width=50% height=50%><br>


<hr>

[Back to the top](#walking-seasons)

<hr>

### Create Application.

These steps can be repeated for more than one application. For example, new models, views and serializers can be added. Aswell as models can be registered to be used for administraion purposes.<br>
The application example in this API, can be repeated to create 'profiles', 'votes', 'followers' and 'blurbs'.<br>
- Create new application within the directory.<br>
    - Enter into the CLI: 
        - **python manage.py startapp profiles**
    - Add to INSTALLED_APPS like shown **'profiles',**<br>
      Don't forget the comma at the end.<br>

- At the top of **models.py** inside **profiles app** import Django User Model to reference it in our custom models.<br>
  Using '**from django.contrib.auth.models import User**'  <br>
 - [Django Signal](https://code.djangoproject.com/wiki/Signals) is used to listen for events occuring in the models, that trigger a piece of code or function to run.<br>
This can encourage saving and deleting of new informtaion passed.
Imported into **profiles** app into **models.py**. <br>
- **from django.db.models.signals import post_save.**

- Import model created into **profiles** **admin.py**.
    - **from .models import Profile**
<br>

[Django](https://www.djangoproject.com/) is used to create url paths.<br>
<img src="assets/images/readme-images/urls.png" width=30% height=30%><br>

### Access Admin panel
Create superuser, input for CLI:<br>
**python manage.py createsuperuser**<br>
Enter a Username and a Password. Skip email for easier option.<br>
<hr>

[Back to the top](#walking-seasons)

<hr>

## Libraries.


<hr>

[Back to the top](#walking-seasons)

<hr>


### RUN SERVER 

CLI input -- **python3 manage.py runserver**<br>
(IF URL NOT ALLOWED - ADD URL TO ALLOWED_HOSTS in settings.py).<br>
<br>


### NON-COMMITED FILE

A file called **env.py** should be created to hold environments for safely developing new websites.<br>
It should be entered into the .gitignore file to avoid being commited.<br>
This does involve saving a snippet of it incase the coding environment is closed and returned to at a later date, and a new environment is created. **The env.py is not saved**.<br>

<hr>

## REQUIRED FILE.
### Requirements.txt file.

A file was created within the project to hold all the necessary input for these installed libaries in the project - **requirements.txt**.<br>
<img src="assets/images/readme-images/Reqtxt.png" width=50% height=50%><br>

File required for Heroku use:

- Requirements.txt for local deploymemt. <br>

<br>

- Redirect to requirement.txt to store the files when installation is successfull.

- Either CLI input to be used:
    - **pip3 freeze --local > requirements.txt**.<br>
    - **pip freeze > requirements.txt**<br>

<br>

### SERVER GUNICORN

To run [Django](https://www.djangoproject.com/) on, for [Heroku](https://dashboard.heroku.com/) devlopment.

CLI input - **pip3 install 'django<4' gunicorn**.<br>
<br>

### POSTGRESQL LIBARY - ELEPHANTSQL.

[ElephantSql](https://www.elephantsql.com/) hosted the Database for storing data to be used within a cloud.

CLI input - **pip3 install dj_database_url==0.5.0 psycopg2**.<br>
<br>

<hr>


### MIGRATE CHANGES

Migrate changes are needed for each new App or change to the App.<br>
This includes new models or again, any changes too.<br>

CLI input - **python3 manage.py migrate** <br>


#### Check which migrations are to be made.

**python3 manage.py makemigrations --dry-run**<br>


#### To make the migrations shown.

**python3 manage.py makemigrations**<br>


#### To show any migrations that need to be done in a list, for indentification.

**python3 manage.py showmigrations**<br>

#### To complete the migration.

**python3 manage.py migrate**<br>

<img src="assets/images/readme-images/makeandmigrate.png" width=30% height=30%><br>

<hr>

[Back to the top](#walking-seasons)

<hr>


# Deployment

To deploy this Full Stack project, [Heroku](https://dashboard.heroku.com/), a cloud based platform was used.
Follow the steps for deployment method:<br>
1. If needed, sign in and register to Heroku website first. _Click_ on **New** in the top right corner to create a new application. <br>
<img src="assets/images/readme-images/Heroku.png" width=30% height=30%><br>

2. Add an application name. Follow the rules of what you can enter. Select a region, and _click_ **Create App**.<br>
<img src="assets/images/readme-images/Heroku2.jpeg" width=30% height=30%><br>
3. Next stage will be a few changes on this page below. First, click into **Settings**.<br>
<img src="assets/images/readme-images/Heroku3.3.png.jpeg" width=30% height=30%><br>
4. Once in **Settings**, Config Vars need altering. Remove <em>DISABLE_COLLECTSTAIC</em> on deployment.<br>
<img src="" width=30% height=30%><br>
**ALSO**<br>
<em>DEBUG</em> in settings.py need to be set to <em>FALSE</em> for deployment.<br>

5. Now _click_ into **Deploy**. This wesbite was connected to **Github**. Which can be selected at the top. The **orange line**, shows the location to connect your repository from **Github** to **Heroku**. _Enter_ the name of the repository you need and connect. This pictures shows the repository already connected via **Github**. _Scroll_ to the bottom of the page to deploy. Select **main branch** and _click_ **Deploy Branch**.<br>
<img src="assets/images/readme-images/Heroku5.5.png.jpeg" width=30% height=30%><br>

6. The website may show as _building_ for a while. Once it has completed, it should look like the images below, with a **view** link. _Click_ here to view your website.<br>
<img src="assets/images/readme-images/Heroku6.png" width=30% height=30%><br>

Additionally needed files for Heroku use:
<ul>

<li>Profile. (Capital **P** needed.)</li>
</ul>

[Back to the top](#walking-seasons)

<hr>


## Clone website.

All installing and requirements for this project have to be completed correctly before a Clong of the website can be created. <br>

To clone the project. I _clicked_ **code** in the respository file. In the dropdown menu, **copy** the link.<br>
Here, on the image below,  the locations are highlighted in **pink**.<br>
![clone]()<br>
Once cloned, **open** an IDE such as **GitBash**, to clone your wesbite. _Type_ **git clone** followed by your copied **URL link**. Hit enter.
![git clone for git bash]()<br>

[Back to the top](#walking-seasons)<br>

<hr>


See [Testing](testing.md) file for full use of technologies used to test this wesbite.<br>

[Back to the top](#walking-seasons)

<hr>


# Credits.

1. [Code Institute](https://codeinstitute.net/) for providing examples of [Django](https://www.djangoproject.com/) projects through [Code Institute](https://codeinstitute.net/) coursework to build a frontend and backend parts tp this project using databases, libaries, API Frameworks, Bootstrap, Django and Django Built-in benefits such as testing, and React . This helped when creating my 'Profiles', 'Votes', 'Followers' and 'Blurbs' App's within this API. <br>

2. [Stack Overflow](). for help with authenticating user using [Django](/) methods.<br>

3. [Django Documents]() for testing using TestCase.

4. []() Testing tips and hints.
<br>

5. [Python Testing Documents]() for testing tips.


[Back to the top](#walking-seasons)

<hr>


# Awknowledgements.
To the **Tutor Support** team for [Code Institute](https://codeinstitute.net/) for continued support and assitance.<br>
To mentor **Precious Ijege** for continued support and patience while taking part in the course provided by [Code Institute](https://codeinstitute.net/) for a Diploma in Full Stack Software Development.<br>
To the Walkthrough projects of both <em>''</em> and <em>''</em> mini projects supplied by [Code Institute](https://codeinstitute.net/) Coursework.<br>

<hr>

[Back to the top](#walking-seasons)

<hr>