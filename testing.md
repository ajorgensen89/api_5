# Testing
This file holds examples of testing methods used for creating this API.

## PEP 8 linter.

[PEP8 CI](https://pep8ci.herokuapp.com/) with Code Institute to check [Python](https://www.python.org) code.<br>
<br>
PEP8 Packages can be installed in the coding environment.<br>

## Extension.
Extensions added to the workspace can help improve the experience of coding by assisting with debugging, Linters, formatting and much more. <br>
Example of using an exntension.<br>
<img src="assets/images/testing-images/pyex.png" width=30% height=30%><br>
<br>
Example of using an extention.<br>
<img src="assets/images/testing-images/flake8.png" width=20% height=20%><br>
<br>
[Flake8](https://flake8.pycqa.org/en/latest/) and [Python Linting Extentions](https://code.visualstudio.com/docs/python/linting) based extensions can be installed to help to perfect the look of a coding environment by providing linting support for [Python](https://www.python.org/) code.<br>
<br>
'Problems' tab within the coding workspace can be used to suggest problems within the code to be fixed with use of an extension.<br>
Example showing whitespace that needs to be removed and unused imports.<br>
<img src="assets/images/testing-images/problemstab.png" width="50%" height="50%">
<br>
'Problems' tab can identify many other issues thoughout building a website.<br>

<hr>

## Django Rest Framework Testing

[Django Rest Framework](https://www.django-rest-framework.org/) offers testing libraries in built to test code. <br>
APITestCase needs to be imported from rset framework tests.<br>
CLI entry: **python manage.py test**<br>
<br>
Shown in image below. Tests show if they have run succesfully, after being tested in the code to fail, using appropriate HTTP status codes.<br>
<img src="assets/images/testing-images/tests1.png" width="50%" height="50%">
<br>
<br>
Tests can be set to fail depending on the HTTP status code. This image depicts a test failing, and the code needed for it to pass.<br>
<img src="assets/images/testing-images/test3.png" width="50%" height="50%">
<br>
<br>
A test should be 'set up' to create a 'situation' to run a test against.<br>
Each class contains (APITestCase) in the class and each method starts with 'test'<br>
<img src="assets/images/testing-images/test2.png" width="50%" height="50%">
<br>

Testing hints pop up when coming in contact with a piece of code that may not be working properly.<br>
<img src="assets/images/testing-images/Exampleerror.png" width=20% height=20%><br>

Terminal in the workspace shows errors and success messages when running code.<br>
<img src="assets/images/testing-images/codeworks.png" width=20% height=20%><br>
<br>

<hr>

## Errors.
Documentation used when facing some [Errors](https://nodejs.org/api/errors.html#errors_common_system_errors).<br>
Catching errors can be important to enhance a user experience and ease for navigating a website.<br>
This error raised when invalid id was entered in to the URL.<br>

<img src="frontend/src/assets/images/testing-images-frontend/error.png" width=20% height=20%><br>
<br>
Image validation error message ensure large images do not get uploaded. Improves experience and decreases loading times.<br>
<img src="frontend/src/assets/images/testing-images-frontend/imageresizeerror.png" width=20% height=20%><br>

- Errors faced. CORS error. CLIENT_ORIGIN_DEV had not been removed from Heroku Config Vars.<br>
<img src="frontend/src/assets/images/testing-images-frontend/webcature1.png" width=30% height=30%>
<br>
- Errors faced. Proxy error.<br>
<img src="frontend/src/assets/images/testing-images-frontend/proxyerror.png" width=30% height=30%>
<br>
- Errors faced. POST error.<br>
<img src="frontend/src/assets/images/testing-images-frontend/POSTerror.png" width=30% height=30%>
<br>
<br>

### User input Errors.

To lessen user error when entering information onto the website such as username, password and confirm password a 'try' 'catch' error block if created.<br>
[React Alerts](https://react-bootstrap.github.io/docs/components/alerts/) is used to hold messages to show to the user. Javascripts [Optional chaining (?)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) and  Pythons [Django 'non_fields_error'](https://docs.djangoproject.com/en/4.2/ref/forms/api/) used also.<br>


[Back to the top](#testing)


<hr>

[Back to README.md](README.md)

<hr>