# Testing
This file holds examples of testing methods used for creating this API.

## PEP 8 linter.

[PEP8 CI](https://pep8ci.herokuapp.com/) with Code Institute to check [Python](https://www.python.org) code.<br>
<br>
PEP8 Packages can be installed in the coding environment.<br>

## Extension.
Extensions added to the workspace can help improve the experience of coding by assisting with debugging, Linters, formatting and much more. <br>
Example of using an extention.<br>
<img src="assets/images/testing-images-backend/pyex.png" width=30% height=30%><br>
<br>
Example of using an extention.<br>
<img src="assets/images/testing-images-backend/flake8.png" width=20% height=20%><br>
<br>
[Flake8](https://flake8.pycqa.org/en/latest/) and [Python Linting Extentions](https://code.visualstudio.com/docs/python/linting) based extensions can be installed to help to perfect the look of a coding environment by providing linting support for [Python](https://www.python.org/) code.<br>
<br>
'Problems' tab within the coding workspace can be used to suggest problems within the code to be fixed with use of an extension.<br>
Example showing whitespace that needs to be removed and unused imports.<br>
<img src="assets/images/testing-images-backend/problemstab.png" width="50%" height="50%">
<br>
'Problems' tab can identify many other issues thoughout building a website.<br>

<hr>

# Django Rest Framework API Testing

[Django Rest Framework](https://www.django-rest-framework.org/) offers testing libraries in built to test code. <br>
APITestCase needs to be imported from rset framework tests.<br>
CLI entry: **python manage.py test**<br>
<br>
Shown in image below. Tests show if they have run succesfully, after being tested in the code to fail, using appropriate HTTP status codes.<br>
<img src="assets/images/testing-images-backend/tests1.png" width="50%" height="50%">
<br>
<br>
Tests can be set to fail depending on the HTTP status code. This image depicts a test failing, and the code needed for it to pass.<br>
<img src="assets/images/testing-images-backend/test2.png" width="50%" height="50%">
<br>
<br>
A test should be 'set up' to create a 'situation' to run a test against.<br>
Each class contains (APITestCase) in the class and each method starts with 'test'<br>
<img src="assets/images/testing-images-backend/test3.png" width="50%" height="50%">
<br>

Testing hints pop up when coming in contact with a piece of code that may not be working properly.<br>
<img src="assets/images/testing-images-backend/Exampleerror.png" width=20% height=20%><br>

Terminal in the workspace shows errors and success messages when running code.<br>
<img src="assets/images/testing-images-backend/codeworks.png" width=20% height=20%><br>
<br>

<hr>

## Errors.
Documentation used when facing some [Errors](https://nodejs.org/api/errors.html#errors_common_system_errors).<br>
Catching errors can be important to enhance a user experience and ease for navigating a website.<br>
This error raised when invalid id was entered in to the URL.<br>

<img src="assets/images/testing-images-backend/error.png" width=20% height=20%><br>
<br>
Image validation error message ensure large images do not get uploaded. Improves experience and decreases loading times.<br>
<img src="assets/images/testing-images-backend/imageresizeerror.png" width=20% height=20%><br>

<br>
On occassion the logout request would take a few tries of a mouse click interaction to logout. Console Log errors show a token refresh, but then went to clicked again, with no changes, it would log out the user.<br>
<img src="frontend/src/assets/images/testing-images-frontend/logouterr.png" width=20% height=20%><br>
<br>

It was noted that occasionally on login, even when the home screen was able to view when logged out, the counts from comments or votes would not appear. However in this image, the comments are seen and s user is not logged in.<br>
<img src="frontend/src/assets/images/testing-images-frontend/Notloggedinerr.png" width=20% height=20%><br>
[Back to the top](#testing)

<hr>

# User input Errors.
Demonstrates errors faced when building the frontend React portion to this project.<br>

To lessen user error when entering information onto the website such as username, password and confirm password a 'try' 'catch' error block if created.<br>
[React Alerts](https://react-bootstrap.github.io/docs/components/alerts/) is used to hold messages to show to the user. Javascripts [Optional chaining (?)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) and  Pythons [Django 'non_fields_error'](https://docs.djangoproject.com/en/4.2/ref/forms/api/) used also.<br>
<br>
Alerts have been used to display message for errors that may occur due to incorrect use input. This example shows errors being captured and shown to the user for empty username and password fields.<br>
<img src="frontend/src/assets/images/testing-images-frontend/UserPawwemptyerror.png" width=30% height=30%><br>
<br>
Alert message shown for incorrect password errors.<br>
<img src="frontend/src/assets/images/testing-images-frontend/passnotmatcherror.png" width=30% height=30%><br>
<br>
POST errors can be seen in the console as developing. In this example, the error is because the Username already exsists so a POST response was not created and the user is alerted with a warning message.<br>
<img src="frontend/src/assets/images/testing-images-frontend/POSTerror.png" width=30% height=30%><br>
<br>
POST error, aswell as other errors, are always generated in the workspace terminal.<br>
<img src="frontend/src/assets/images/testing-images-frontend/POsterror2.2.png" width=30% height=30%><br>
<br>

Correctly signals, POST and GET, are also seen in the terminal for confimation that the frontend is communicating with the API backend.<br>
<img src="frontend/src/assets/images/testing-images-frontend/POSTGET.png" width=30% height=30%><br>
<br>

- Error faced when combining the API and React projects. CORS error. CLIENT_ORIGIN_DEV had not been removed from Heroku Config Vars.<br>
<img src="frontend/src/assets/images/testing-images-frontend/webcature1.png" width=30% height=30%>
<br>
- Errors faced. Proxy error.<br>
<img src="frontend/src/assets/images/testing-images-frontend/proxyerror.png" width=30% height=30%>
<br>
- Errors faced. POST error.<br>
This error kept appearing once the backend and frontend projects had been combined.<br>
If the backend API **python manage.py runserver**, had not been entered to get the server running in conjuction with the React frontend server which ran on 'nvm install 16.18.0', 'nvm use 16.18.0', then 'npm start', these errors would appear. To run in the react frontend, A Frontend folder was created in the directory. All commands for the frontend were ran here. CLI **cd frontend** to ensure inside the correct folder.<br>
This error showed together with the above Proxy Error.<br>
<img src="frontend/src/assets/images/testing-images-frontend/POSTerror.png" width=30% height=30%>
<br>
- Coding error for mapping the full array of blurbs. The data arrray would return and was printed in console log.<br>
<img src="frontend/src/assets/images/testing-images-frontend/NoMap.png" width=20% height=20%><br>
This error was spotted and fix as the full array have not been mapped through using map() function to get all blurbs in the API.<br>
<img src="frontend/src/assets/images/testing-images-frontend/YesMap.png" width=10% height=10%><br>
<br>

- When creating commentary within my files, I had commented out a vital piece of code that caused issues when running the website. This took a good couple of days to find and solve as it was causing a few different errors.<br>
With the help of a Slack Community Individual, the problem was found and resolved.<br>
<img src="frontend/src/assets/images/testing-images-frontend/owner_id.png" width=20% height=20%><br>
<br>


<hr>

[Back to the top](#testing)


<hr>

[Back to README.md](README.md)

<hr>