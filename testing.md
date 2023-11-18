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

<br>

[Back to the top](#testing)


<hr>

[Back to README.md](README.md)

<hr>