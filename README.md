# Django Rest Framwork for an application programming interface (API).

This workspace holds the API developed, for use with connection to Project 5, for backend storage for user interface requests.
This is built to hold models and display content using React for the frontend of the project named, Project 5.
This project holds storage and responses for HTTP requests, JSON Web Tokens for authentication, permission and to tell user input apart from other user input.
The Django Rest Framework replaces the use of many HTML pages and displays the information requests using the React Frontend project, Project 5.

CRUD.

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

### Cloudinary.
Connect Django to [Cloudinary](https://cloudinary.com/) for storage and delivery of media such as images.

### Pillow.
This library adds capabilities to process images. **'P' in Pillow needs to be a capital when installing**.


Install [Django](https://www.djangoproject.com/) and intialise project in current directory of workspace using dot notation, **'.'** .<br>
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
<img src="" width=50% height=50%><br>
    - Entry for Cloudinary in **settings.py**.<br>
    <img src="assets/images/readme-images/setcloud.png" width=50% height=50%><br>


## Libraries.


