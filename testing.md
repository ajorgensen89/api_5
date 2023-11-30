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
<img src="assets/images/testing-images-backend/problemstab.png" width="30%" height="30%">
<br>
'Problems' tab can identify many other issues thoughout building a website.<br>

## Python Linting.

Test were carried out on different Linting platforms including:
- [Code Institute Linter](https://pep8ci.herokuapp.com/)
- [Visual Studio code](https://code.visualstudio.com/docs/python/linting)
This helped to indentify linting errors within the code to establish and better format for the workspace environment.<br>
[Visual Studio code](https://code.visualstudio.com/docs/python/linting)<br>
<img src="frontend/src/assets/images/testing-images-frontend/LintingEx2.png" width=20% height=20%><br>

<br>
[Code Institute Linter](https://pep8ci.herokuapp.com/)<br>
<img src="frontend/src/assets/images/testing-images-frontend/LintingEx.png" width=20% height=20%><br>
<br>

Some corrections suggested, such as removing whitespace from after and before the curly braces in { Navlink }, for example, did not improve my code, therefore it was left. Same as the linter request to remove many semi-colons from areas where I felt they were neccessary, were not removed.<br>

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
<br>
<br>

A POST error kept popping up and was unhappy regarding leaky code in an unmounted component wihtin the useEffect React function. Using some guidance from ChatGPT, I found a model to a solution and adapted it for use for this project by setting a clean up, like it suggests.<br>
**Code Error showing in console log as a POST error.**<br>
<img src="frontend/src/assets/images/testing-images-frontend/leakerror.png" width=30% height=20%><br>
<br>
**Suggested solution to be implemented.**<br>
<img src="frontend/src/assets/images/testing-images-frontend/LeakFix.png" width=30% height=20%><br>
<br>
**Code that was adapted to remove POST error in console. Setting a clean up for the useEffect function when fetching posts.**<br>
<img src="frontend/src/assets/images/testing-images-frontend/LeakCode.png" width=30% height=30%><br>
<br>

Console log error seemed to be coming from the package.json files.<br>
Tampering with this code did not seem a smart idea due to skill level and understanding so they were left alone.<br>
Error logged for the project as noticed.<br>

Console Log error messgae. <br>
<img src="frontend/src/assets/images/testing-images-frontend/classnameerror.png" width=30% height=0%><br>

Noted areas where the issue of 'classname' not 'className' was found within the workspace.<br>
<img src="frontend/src/assets/images/testing-images-frontend/classnameerror2.png" width=30% height=30%><br>


Developers that create the packages are responsible for these errors in the image below. Fixes maybe released and can be applied with an **npm audit fix**<br>
<img src="frontend/src/assets/images/testing-images-frontend/auditnpm.png" width=30% height=30%><br>
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

- Error faced when combining the API and React projects. CORS error. CLIENT_ORIGIN_DEV had not been removed from [Heroku](https://dashboard.heroku.com/login) Config Vars.<br>
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

## Unauthorized user check errors.

These network requests will always display in console.log when first signing in as these three, together, confirm whether a user is actually logged out.<br>
<img src="frontend/src/assets/images/testing-images-frontend/NetworkRequestunauth.png" width=20% height=20% >

When first loading the development website, it would get 'sticky' going back and forth to workspace and hosted website. An extra CTRL + ALT + R to refresh would tend to sort the page links when navigating.
This maybe due to the local timestamp being set still in local storage.<br>

When the page is refreshed, a 400 error is sent due to no username input on sign in.<br>
<img src="frontend/src/assets/images/testing-images-frontend/NoUsername.png" width=20% height=20% >


## React Dev Tools

The website can be inspected by right clicking on the mouse to bring up Developer Tools to help assist with errors.
<br>

[React Developer Tools](https://chromewebstore.google.com/detail/fmkadmapgofadopljbjfkapdkoienihi) can be found on particular website and used as a developmental tool. Components and profiler options are given to look through to help find issues within code and what maybe causing an error.<br>
<img src="frontend/src/assets/images/testing-images-frontend/ReactDeveloperTools.png" width=20% height=20% >
<hr>

[Back to the top](#testing)


<hr>

[Back to README.md](README.md)

<hr>