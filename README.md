# Walking Seasons.
Project Idea

## Agile

# Design

## Colour Scheme

The scheme for the website uses an array of colours to portait the vibrancy of these colours in all the different seasons avaliable to us. The grey scale background gives the website a more 'modern feel' with bursts of colour highlighting different areas.<br>
When moving from page to page, pops of colour help to show the user an icon or link they maybe hovering over, aswell as helping to highlight the current page the user is browsing.<br>
![Colours]()<br>
For [CCS](https://www.w3schools.com/Css/) in thie product Bootstrap styles are integrating in [React](https://react.dev/) functionality to help with design.<br>


## Typography

The text styles used are from [Google Fonts](https://fonts.google.com/), they are installed by a link in the <em>'Head'</em> of the <em>'index.html'</em> page.<br>
Donegal One - This font held the colour grey very well. It looked agreeable in different grey scale tones and remained professional against the more elaborate Google Font of Delicious Handrawn.<br>
Sans Serif - Used for clear business standard text and is very readable. Placed incase a user finds the [Google Fonts](https://fonts.google.com/) chosen, not to work on their platform.<br>
Delicious Handrawn - The name of the font sounded appealing to use to help emphaise text describing the seasons. It is also used at different points on the website to just add contrast to the Donegal One font.<br>
<br>

## Icons

[Font Awesome](https://fontawesome.com/) was used for icons throughout this project. They help portait different style faces including big grins for the Home page, encouraging winks for the sign up page and well known icons, for the well known social platform links. 
<br>

[Back to the top](#)

<hr>

# Features.
User can create a profile add images, edit content and view other user's profiles. The ability to edit profiles is targeted at each individual user. You will not be able to ammend other profiles.<br>
<br>
Blurbs can be created to hold titles, images and content about the picture. Or just an interesting piece of content by itself can be posted.<br>
Adding a visual image is always more appealing to the eye.<br>
Blurbs are talking point that users may want to share with others. A category for the photo or content can be selected to filter blurbs into 4 categories.<br>
The 4 categories are Spring, Summer, Autumn and Winter.<br>
The website will have the ability for the user to filter by Season to look at a particular one they have an interest in.<br>
<br>
Everybody likes a discussion board, so a comment section has been created for users to make a comment or delete a comment about a particular blurb.<br>
<br>
User can vote for their favourite pictures. The most popular images and content with by filtered out and revealed for the user to access more easily.<br>
Voting can occur when a user is logged in and they can not vote on their own blurbs they have posted on the wesbite. This helps to keep the voting, fair.<br>
Votes can be created, viewed and deleted.<br>
<br>

Followers/following/unfollow

<br>


### Intialise REACT project.

No student template has been added to this project due to conflicting information with the [React](https://react.dev/) Application. A workspace for coding was created in [Github](https://github.com/) and opened into the coding enviroment, [Gitpod](https://www.gitpod.io/).<br>
App.js page holds all the routes.<br>

To initilise  [React](https://react.dev/) Application the command in th terminal is : **npm install**<br> This installs all the files neeeded for a [React](https://react.dev/) Application start point.<br>
To start To project, CLI input: **npm start**<br>
Depending on version that works a version may have ot be used. In this case extra code needed entering to ensure the project would run.<br>
CLI input enter enter time the workspace was run in a browser:<br>
- **nvm install 16.18.0**
- **nvm use 16.18.0**
- THEN **npm start** can be entered.<br>
  REPEAT EACH TIME WHEN RUNNING SERVER.<br>
<br>
Set up installations in 'project_5'.<br>
-  Enter into CLI: <br>
    -  **pip install django** ( pip3 install 'django<4>' - used here as prefered for Long Term Support (LTS)').
    -  **pip install django-cloudinary-storage**
    -  **pip install Pillow**
    <br>


- Create **env.py** file for production state to save variables to not be pushed to [Github](https://github.com/).<br>
**Final Image for all secret files connected into workspace.**<br>

<hr>

[Back to the top](#walking-seasons)

<hr>


# React
Using [React Bootstrap](https://react-bootstrap.github.io/) removes the dependancy on bootstrap.js and jQuery.<br> 
<br>
Due to the development stage of [React Bootstrap](https://react-bootstrap.github.io/), early versions maybe used.<br>
CLI input for installation is:<br>
- **npm install react-bootstrap@1.6.3 bootstrap@4.6.0**<br>
<br>
CSS link can be found in the documentation. Labeled 'Bootstrap Link' in index.html file.<br>
Each component from [React Bootstrap](https://react-bootstrap.github.io/) needs importing on each page it is used, for example: **'import Button from react-bootstrap/Button';**<br>
<br>
Best practise for each CSS file is to have a module.css file for each component. Example: NavBar.module.css for the NavBar component. They are applied by using the {styles.className} syntax.<br>
<br>

## React Router Library.

[React Router](https://reactrouter.com/en/main)Handle routing for URL's to render different pages within the webpage.<br>
CLI input for installation - **npm install react-router-dom@5.3.0**
The library controls what the user sees depending on what is render in the HTML for React App's.<br>
<br>
Routes to switch need to be added to the Index.js file including App.js.<br>
<img src="frontend/src/assets/images/readme-images-frontend/routechaning.png" width=30% height=30%><br>
Paths for switching betweeen pages are added to the App.j file.<br>
<img src="frontend/src/assets/images/readme-images-frontend/routeappjs.png" width=20% height=20%><br>
<br>

### React Navigation.
[React NavBar](https://react-bootstrap.github.io/docs/components/navbar)
<br>
Wrap 'App' conponent inside <Router> on App.js page.
<br>

## React components.

## Axios Library.

Used to tell this React App to send request to the API. Enables they to communicate for better data transfer and changes.<br>
Using [Axios](https://axios-http.com/) also enabled combining workspaces between React and API.<br>
CLI input - **npm install axios**

### INFINTE SCROLL LIBARY<br>

**npm install react-infinite-scroll-component** <br>
<br>

### React Bootstrap Form
<br>
[React Bootstrap Form](https://react-bootstrap-v4.netlify.app/components/forms/)
Other Bootstrap items have been use throughout the project. Within the Form section alone, React Bootstrap classes called Images, Column, Row and Button have been used.<br>
React provides a boilerplate for individual coding to be added. This exmaple includes boilerplate and some starting code to transform it.<br>
<img src="frontend/src/assets/images/readme-images-frontend/ReactExample.png" width=30% height=30%>
<br>


## Authenication.
Authenication is important so a user will have the ability to view, create, edit and delete their own blurbs and comments.<br>
Using authenication of a user, only the logged in user can remove their vote that they have created.<br>
<br>
To further user experience, ease for authenication situations, [Django Rest Auth](https://pypi.org/project/dj-rest-auth/) can installed.<br>
CLI Input - **pip3 install dj-rest-auth==2.1.9** <br> (2.1.9 not necessary in input if different version preferred.) <br>
Followed by adding it to INSTALLED_APP in settings.py.<br>


[JSON web tokens](https://jwt.io/) (JWT) securely transmit data between and server as JSON objects. JWT are stored on the client side and they can be refered to as 'stateless'.<br>
Using Django's built in authenication module relies on Sessions for data storage. User experience can be improved with use of these sercuity measure which can deal with access and refresh tokens.<br>
<br>

Raw JSON data can be manipulated for a better user experience. Within the administraion panel to update items such as the Profile Application, a more user frendly approach can be used by setting the serializer class on a view, [Django Rest Framework](https://www.django-rest-framework.org/) sets it out in a form format automatically.<br>
<br>
The Bad Request can be shown here as a method to catch and raise errors.<br>
<img src="assets/images/readme-images/RawJSON.png" width=20% height=20%><br>
Status is OK and the input fields look much better for user and clients to input data.<br>
<img src="assets/images/readme-images/Jsonform.png" width=20% height=20%><br>

[Simple JWT](https://pypi.org/project/djangorestframework-simplejwt/) tokens will be used in production and for development, sessions is used.<br>
INSTALL CLI COMMAND<br>
**pip install djangorestframework-simplejwt**<br>
<br>

## Register
If a user would like to register [Django REST Auth](https://www.django-rest-framework.org/api-guide/authentication/) offers a standard registration process to install. <br>
CLI input - **pip install 'dj-rest-auth[with_social]'**<br>
Full information for the process can be accessed here: https://pypi.org/project/dj-rest-auth/ <br>
<br>
Use of the [Django Rest Authentication](https://pypi.org/project/dj-rest-auth/) library enable handling of registraion, login, logout, user and token refresh.<br>
Credited from Code Institute is a map of dj-rest-auth endpoints for an API.<br>
<img src="assets/images/readme-images/djrestauth.jpg" width=20% height=20%>

<hr>

<br>



<hr>

[Back to the top](#walking-seasons)

<hr>

# Django Rest Framework for an application programming interface (API).

Install [Django Rest Framework](https://www.django-rest-framework.org/).<br>
- CLI input - **pip install djangorestframework**<br>
- Add to INSTALLED_APPS as - **'rest_framework',** (with comma).<br>
- APIviews used for extra functionality for receiving instances, handling errors and adding context to Response objects and instances.

This workspace holds the API developed, for use with connection to Project 5, for backend storage for user interface requests.<br>
This is built to hold models and display content using React for the frontend of the project named, Project 5.<br>
This project contains storage and responses for HTTP requests, JSON Web Tokens for authentication, permission and to tell user input apart from other user input.<br>
The Django Rest Framework replaces the use of many HTML pages and displays the information requests using the React Frontend project, Project 5.<br>
<br>
Authentication for each user can be checked and monitored, for example, only a user of a certain profile can edit their information fields.<br>
In this example the owner of the profile is revealed as True and the user not logged in, is viewed as false.<br>
This can be built up, to access user information and their pertaining objects for manipulation depending on authenication criteria.<br>
<img src="assets/images/readme-images/AuthTF.png" width=40% height=40%><br>



# CRUD.

CRUD stand for Create, Read, Undo and Delete. This is four interactions the developer or the user can have with a website on either the frontend or the backend.<br>
[Django Signal](https://code.djangoproject.com/wiki/Signals) can be used for creating, retrieving, viewing and deleting data.<br>
Delete<br>

<hr>


## Serializers.
Data needs to be deserialized and serialized for the API to GET and POST details from the models in views using serializers from the Rest Framework.<br>
<img src="assets/images/readme-images/JSON select.png" width=50% height=50%><br>
As Applications are developed and models created. More serializers will be used to creat JSON files for data manipulation when sending and receiving from the backend to the frontend of the website.
<img src="assets/images/readme-images/JSON view.png" width=50% height=50%><br>

<br>


### Intialise API project.

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


### Create Applications in API.

These steps can be repeated for more than one application. For example, new models, views and serializers can be added. Aswell as models can be registered to be used for administraion purposes.<br>
The application example in this API, can be repeated to create 'profiles', 'votes', 'followers' and 'blurbs'.<br>
- Create new application within the directory.<br>
    - Enter into the CLI: 
        - **python manage.py startapp profiles**
    - Add to INSTALLED_APPS like shown **'profiles',**<br>
      Don't forget the comma at the end.<br>

- At the top of **models.py** inside **profiles app** import Django User Model to reference it in our custom models.<br>
  Using '**from django.contrib.auth.models import User**'  <br>
 - [Django Signal](https://code.djangoproject.com/wiki/Signals) is used to listen for events occuring in the models, that trigger a piece of code, method or function to run.<br>
This can encourage saving and deleting of new informtaion passed.
Imported into **profiles** app into **models.py**. <br>
- **from django.db.models.signals import post_save.**

- Import model created into **profiles** **admin.py**.
    - **from .models import Profile**
<br>

[Django](https://www.djangoproject.com/) is used to create url paths.<br>
<img src="assets/images/readme-images/urls.png" width=30% height=30%><br>

<hr>

[Back to the top](#walking-seasons)

<hr>


### Access Admin panel
Create superuser, input for CLI:<br>
**python manage.py createsuperuser**<br>
Enter a Username and a Password. Skip email for easier option.<br>

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
 - **pip install django-cloudinary-storage**


### Pillow.

This [Pillow](https://python-pillow.org/) library adds capabilities to process images. **'P' in Pillow needs to be a capital when installing**.

-  **pip install Pillow**


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


### POSTGRESQL LIBARY - ELEPHANTSQL.

[ElephantSql](https://www.elephantsql.com/) hosted the Database for storing data to be used within a cloud.

CLI input - **pip3 install dj_database_url==0.5.0 psycopg2**.<br>
Import dj_database_url into settings.py file.
See Deployment for further deployment details relating to this.<br>
<br>
Create a new instance in the appropriate region and then copy the URL to use in config vars for Heroku deployment.<br>
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

# Refactoring code

To refactor code, helps lessen the volume of lines of code. Using [Django Generic Views](https://www.django-rest-framework.org/api-guide/generic-views/) is one option that can be imported into the project to improve amount of code needs to GET, POST, PUT and DELELTE objects.<br>
[Django Generic Views](https://www.django-rest-framework.org/api-guide/generic-views/) use LIST, CREATE, RETRIEVE, UPDATE and DESTORY passed into function using options such as 'generics.ListCreateAPIView', 'generics.RetrieveUpdateDestroyAPIView' and 'generics.RetrieveDestroyAPIView'.<br>
Table of notes for Refactoring.<br>
<img src="assets/images/readme-images/notesRf.jpg" width=10% height=10%><br>
Before Refactoring code for the comment section.<br>
<img src="assets/images/readme-images/B4refactor.png" width=10% height=10%><br>
<br>
After Refactoring the code for the comments section using [Django Generic Views](https://www.django-rest-framework.org/api-guide/generic-views/)<br>
<img src="assets/images/readme-images/Afterrefactor.png" width=10% height=10%><br>
<br>

### Context Hooks Refactoring

In React Frontend, context hooks were created to lessen coding in certain files sush as App.js. This help refactor and organise code when developing.
A new folder was created to separate out code.<br>
<img src="frontend/src/assets/images/readme-images-frontend/CreateContextFolder.png" width=10% height=10%><br>
<br>
Code for each context are placed in a separte .js file. Now returned in context file.<br>
<img src="frontend/src/assets/images/readme-images-frontend/ContextHook1.png" width=10% height=10%><br>
<br>
Decreases code in App.js <br>
<img src="frontend/src/assets/images/readme-images-frontend/ContextHooktidyApp.png" width=10% height=10%><br>
<br>
Provider wraps App function for App.js in Provider.<br>
<img src="frontend/src/assets/images/readme-images-frontend/ContextHookprovideset.png" width=10% height=10%><br>
<br>
Context hooks set to fulfil their duties stated in the comments.<br>
<img src="frontend/src/assets/images/readme-images-frontend/contexthookNavBadSignInForm.png" width=10% height=10%><br>
<br>





[Django Generic Filtering](https://www.django-rest-framework.org/api-guide/filtering/) is used and offers better organisation of data for the users viewing pleasure.<br>
Filtering gets applied into the [queryset](https://docs.djangoproject.com/en/4.2/ref/models/querysets/).<br>
Use of queryset before filters are applied.<br>
<img src="assets/images/readme-images/queryset.png" width=10% height=10%><br>
<br>
After filters are applied. This improves user experience and increases the accuracy of counting votes and followers to use this data on the website.<br>
<img src="assets/images/readme-images/querychange.png" width=10% height=10%><br>
Their fields would need updating in their linked serializer and added the the meta class fields also.<br>
Extras such as ordering and search fields need including.<br>
<br>
Library that applies further filters for specific conditions.<br>
CLI input: **pip install django-filter**<br>
<br>

<hr>

[Back to the top](#walking-seasons)

<hr>

# Combining React project and DRF API.
Steps to take from Code Institute CourseWork. This enabled the React and API projects to be unified.<br>
<img src="assets/images/readme-images/combine1.png" width=30% height=30%><br>
<br>
<img src="assets/images/readme-images/combine2.png" width=30% height=30%><br>
<br>
<img src="assets/images/readme-images/combine3.png" width=30% height=30%><br>
<br>
<img src="assets/images/readme-images/combine4.png" width=30% height=30%><br>
<br>
<img src="assets/images/readme-images/combine5.png" width=30% height=30%><br>
<br>
<img src="assets/images/readme-images/combine6.png" width=30% height=30%><br>
<br>
<img src="assets/images/readme-images/combine7.png" width=30% height=30%><br>
<br>



# Deployment

To deploy this Full Stack project, [Heroku](https://dashboard.heroku.com/), a cloud based platform was used.
Follow the steps for deployment method:<br>
1. If needed, sign in and register to Heroku website first. _Click_ on **New** in the top right corner to create a new application. <br>
<img src="assets/images/readme-images/Heroku.png" width=30% height=30%><br>

2. Add an application name. Follow the rules of what you can enter. Select a region, and _click_ **Create App**.<br>
<img src="assets/images/readme-images/Heroku2.jpeg" width=30% height=30%><br>
3. Next stage will be a few changes on this page below. First, click into **Settings**.<br>
<img src="assets/images/readme-images/Heroku3.3.png.jpeg" width=30% height=30%><br>
4. Once in **Settings**, Config Vars need altering. Remove <em>DISABLE_COLLECTSTAIC</em> on deployment if neceassary.<br>
DATABASE_URL needs adding config vars as key and value as the URL from [ElephantSql](https://www.elephantsql.com/).<br>
DATABASE in settings.py need updating for deployment also too:<br>

**if 'DEV' in os.environ:<br>
    DATABASES = {<br>
        'default': {<br>
            'ENGINE': 'django.db.backends.sqlite3',<br>
            'NAME': BASE_DIR / 'db.sqlite3',<br>
        }<br>
    }<br>
else:<br>
    DATABASES = {<br>
        'default': dj_database_url.parse(os.environ.get("DATABASE_URL"))<br>
    }<br>
    print('connected')**<br>
(CORRECT INDENTATION NEEDED FOR ABOVE CODE)<br>
<br>
Config Vars example on project deployment.<br>
<img src="" width=30% height=30%><br>
<br>
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
<br>
In preparation for Heroku deployment a view extra steps took place including adding root route, pagination to ListViews, providing a defualt JSON renderer and formtatting for date and time.<br>
<br>

### SERVER GUNICORN

To run [Django](https://www.djangoproject.com/) on, for [Heroku](https://dashboard.heroku.com/) devlopment.

CLI input - **pip3 install 'django<4' gunicorn**.<br>
CLI input **pip3 install gunicorn django-cors-headers**<br>
<br>
Add to requiremnts.txt file and add to INSTALLED_APPS and MIDDLEWARE in settings.py. <br>

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

1. [Code Institute](https://codeinstitute.net/) for providing examples of [Django Rest Framework](https://www.djangoproject.com/) API building through [Code Institute](https://codeinstitute.net/) coursework to build backend parts to this project using databases, libaries, API Frameworks, Bootstrap, Django and Django Built-in benefits such as testing, and React for the frontend. This helped when creating my 'Profiles', 'Votes', 'Followers' and 'Blurbs' App's within this API. <br>

2. [Code Institute](https://codeinstitute.net/) for providing a React front end project to build called 'Moments' Alwell as a Django Rest Framework API.<br>

3. [Stack OverFlow](https://stackoverflow.com/questions/61694370/why-is-alert-not-showing-on-my-react-app) for React Alert not showing.<br>

4. [CORS](https://stackoverflow.com/questions/28046422/django-cors-headers-not-work) error tips.<br>


[Back to the top](#walking-seasons)

<hr>


# Awknowledgements.
To the **Tutor Support** team for [Code Institute](https://codeinstitute.net/) for continued support and assitance.<br>
To mentor **Precious Ijege** for continued support and patience while taking part in the course provided by [Code Institute](https://codeinstitute.net/) for a Diploma in Full Stack Software Development.<br>
To the Walkthrough projects of both <em>''</em> and <em>''</em> mini projects supplied by [Code Institute](https://codeinstitute.net/) Coursework.<br>

<hr>

[Back to the top](#walking-seasons)

<hr>