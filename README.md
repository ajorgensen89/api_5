# Walking Seasons.
This project is the result of combining two repositories, a React frontend and a Django Rest Framework Application Programming Interface (API).<br>
This product will be using data saved and sent from the API to the React frontend to produce a user friendly website for interaction.<br>
The idea of this wesbsite is to offer a platform for users to share and comment on other users blurbs. The blurbs can be voted for, to show and highlight the best content.<br>
Users with the best blurbs on the website can be followed.<br>
All users will be able to view, create, edit and delete their own content and own a profile page that they can customise.<br>

<br>

## Agile.
User Stories were created with [Github](https://github.com/) to develope ideas for a website where users can save and access their content to create blurbs about walking through different topics and seasons with images and storys, vote on the best content, while following particular users that they enjoy hearing from.<br>
<br>

A User Story Project can be created within the repository itself to hold issues to follow, while creating the project.<br>
These User Stories can be created separately and linked to the project.<br>
<img src="frontend/src/assets/images/readme-images-frontend/GithubAGgile.png" width=20% height=20%><br>
Labels and status bars can be added to the user stories so they can be tracked for updates and progress.<br>
<img src="frontend/src/assets/images/readme-images-frontend/GitHubUSAgile.png" width=20% height=20%><br>
<br>

<hr>

<br>

# Design.

## Colour Scheme.

The scheme for the website uses an array of colours to portait the vibrancy of these colours in all the different seasons avaliable to us. The grey scale background gives the website a more 'modern feel' with bursts of colour highlighting different areas.<br>

When moving from page to page, pops of colour help to show the user an icon or link they maybe hovering over, aswell as helping to highlight the current page the user is browsing.<br>

<img src="frontend/src/assets/images/readme-images-frontend/P5colors.png" height=5% width=5%><br>

For [CCS](https://www.w3schools.com/Css/) in this product, Bootstrap styles are integrated in [React](https://react.dev/) functionality to help with design and custom css module styles are added separately.<br>


## Typography.

The text styles used are from [Google Fonts](https://fonts.google.com/), they are installed by a link in the <em>'Head'</em> of the <em>'index.html'</em> page.<br>
Donegal One - This font held the colour grey very well. It looked agreeable in different grey scale tones and remained professional against the more elaborate Google Font of Delicious Handrawn.<br>
Sans Serif - Used for clear business standard text and is very readable. Placed incase a user finds the [Google Fonts](https://fonts.google.com/) chosen, not to work on their platform.<br>
Delicious Handrawn - The name of the font sounded appealing to use to help emphaise text describing blurbs and content. It is also used at different points on the website to just add contrast to the Donegal One font.<br>
<br>

## Icons.

[Font Awesome](https://fontawesome.com/) was used for icons throughout this project. They help portait different style faces including big grins for the Home page, encouraging winks for the sign up page and editing icons for content a logged in user can modify. A dropdown menu icon is used to portait the collapse navigation bar on small devices too.
<br>

[Back to the top](#walking-seasons)

<hr>

## Coding Diagrams.

Diagrams can help to find routes within the code to link models and access different parts of one model while making connections to and from different objects.<br>
<img src="frontend/src/assets/images/readme-images-frontend/diagrams.jpg" width=20% height=20%><br>
<br>

<hr>

<br>

# Features.

### Profile.
User can create a profile, add an Avatar image, edit and delete content and view other user's profiles. The ability to edit profiles is targeted at each individual user. Users will not be able to ammend other profiles.<br>
<br>

### Blurbs.

Blurbs can be created to hold titles, images and content about the picture in the blurb.<br>
Adding a visual image is always more appealing to the eye.<br>
Blurbs are talking points that users may want to share with others.

The website will have the ability for the user to use a search bar to look for particular content or get shown a no result image, inwhich they can try again.<br>
<br>
A user can add a new blurb while adding a title and content to an image.<br>
<img src="frontend/src/assets/images/readme-images-frontend/NewBlurb.png" width=20% height=20%><br>
Each blurb shows the user who posted the blurb, date it was posted, image, title, content, whether it has been voted for and if any comments have been created about it. Clicking on the image itself takes you to the blurbs own page which lists the comments underneath.<br>
<img src="frontend/src/assets/images/readme-images-frontend/Newsfeedview.png" width=20% height=20%><br>


### Comments.

Everybody likes a discussion board, so a comment section has been created for users to make a comment, edit their own comments or delete a comment about a particular blurb. Users can not delete or edit other users comments.<br>

If the user is logged in, users will be able to post a comment. If not logged in, the 'typing' comments section will not appear.<br>
<img src="frontend/src/assets/images/readme-images-frontend/comments.png" width=20% height=20%>
<br>
Users will be able to successfully send and store their data from the React Frontend to the API. Here is an exmaple comment created in React and stored within the API.<br>
<img src="frontend/src/assets/images/readme-images-frontend/APICommentPost.png " width=20% height=20%>
<br>
The user can click on either the image or the comment speech bubble to leave a comment.<br>
From a desired comment, the user can navigate to the profile of the owner who posted the comment, by clicking the Avatar picture next to the users name in their comment section.<br>

### Voting.

Users can vote for their favourite pictures. The most popular images and content will be filtered out and revealed for the user to access more easily. They can view their 'My Votes' section to the see the content they have liked so far.<br>
Voting can occur when a user is logged in and they will not be able to vote for their own blurbs. This helps to keep the voting, fair.<br>
Votes are collected within a counting field and can be created, viewed and deleted.<br>

<img src="frontend/src/assets/images/readme-images-frontend/VoteCommentCount.png" width=20% height=20%><br>
<br>

### Voting Error.

It was noted that the votes count increases by one on the created blurbs page. If a user was to vote on the individual blurb page itself, after clicking image or comment bubble, the vote would not count correctly.<br>
It does change to 0 and 'not count' as a vote when on the main Home page or newsfeed page. (main '/' page or '/newsfeed' page.) <br>
This would need correcting at a later data due to time constraints.<br>

### Followers.

Users can follow and unfollow other users. The users they follow will appear within the 'newsfeed' navigation page.<br>
Popular profiles are shown and easily accessed for the user.<br>
When visiting their own profile, the user will be able to see how many other user follow them. Also, they will be able to see the users that they like and are following.<br>
Users can 'follow' and 'unfollow' simply by clicking the toggle button.<br>

<br>

## No results.

When there are no results in a search, a picture or a message will be displayed to the user.<br>
The user can use the search bar to try and find particular blurb pieces or keywords.<br>
<br>
<img src="frontend/src/assets/images/readme-images-frontend/Noresultspage.png" width=30% height=30%><br>
<br>

Other messages that are displayed to the user for direction, include a message about whether they can vote or follow a user or if they have to log in first.<br>
This is also the case for leaving comments. Both votes and comments are specific to each indiviual blurb and a count for each blurb, for votes and comments, are counted and shown to the user.<br>
The green thumb in this image shows the 'upvote' as positive, for that blurb.<br>
When removing a vote or comment you may have to go away from the page and come back to see the No results message if, no more votes or comments are avaliable.<br>
<img src="frontend/src/assets/images/readme-images-frontend/VoteCommentCount.png" width=30% height=30%><br>
<br>

### Page Not Found.

A custom Page Not Found page has been added to the project to encourage users away from wrong url input and navigation.<br>
A link is provided for them to navigate away from the page not found zone.<br>
This could be changed to navigate them back to the home page, log in or log out pages.<br>

<img src="frontend/src/assets/images/readme-images-frontend/PageNotFound.png" width=30% height=30%><br>

<br>

### Upload Content.

The user will have an image displayed to them when first creating a blurb.<br>
A [React](https://react.dev/) Spinner will be shown to the user while a page or search is loading, making the page a better user experience.<br>
<img src="frontend/src/assets/images/readme-images-frontend/Spinner.png" width=30% height=30%><br>


### Drop down menu.

The [React](https://react.dev/) component Dropdown, has been used to display a menu for the user to edit and delete their own posts. This will be visable when the image itself it clicked and directed to the blurbs page.<br>

### Popular section.

User will be able to see the most popular users.<br>
Users will have access to a search bar, they can browse the blurbs to get something from a key word or phrase. They can also search for other users by inputting their username into the search bat.<br>

Due to skill and time constraints of the project the final popular section was not fully developed. For future features, a display of the most UpVoted blurbs from other users would also be access here.<br>

### News Feed.

All blurbs will be able to be viewed. The user can nvaigate to a different page in profile to see their own blurbs or navigate to the My Votes sectionn to the blurbs they have voted for. They can be removed from this page too.<br>

### Navigation Bar.

A [React](https://react.dev/) Navigation bar has been used which makes access to each element of the site simpler and more obvious. Using [React](https://react.dev/), a toggle menu function is created for smaller screens to have a drop down menu which collapses and expands open on use mouse click, such as clicking on a link in the menu.<br>
Adjusted, so the menu collapses by itself for better user experience, otherwise they would have to reclick the toggle menu button to close the expanded menu.<br>
A mouse click event Hook has been used to improve this function.<br>
Previously, the menu would stay expanded and cover some of the content underneath before user clicked again.<br>
This image shows the expanded navigation menu view.<br>
<img src="frontend/src/assets/images/readme-images-frontend/Expandedmenu1.png" height=20% width=20%>

<br>

<hr>

<br>

## Future Features.

Due to time constraints, errors faced and skill, this section has been written to hightlight some future features that the site could have benefitted from.<br>

Features can be added to greatly improve this website.<br>
A setTimeOut() function can be added to the search bar to slow the website response to keys presses. This would set a delay in which the searched items would appear, rather than flicking and sending the data request after each key stroke.<br>
<br>

It was noted that the votes count increases by one when the post is first created and your taken to the blurb page. It does change to 0 and 'not count' as a vote on the main Home page.<br>
This would need correcting at a later data. The vote count and comment count is CORRECT when showing all of the blurbs, but on navigation to a single blurb, the counts are not correct. Due to time constraints, this could not be corrected but it is a noted issue for this project.<br> 
To vote, it is best to make a click response from the main page when viewing all blurbs to ensure the counts are correct. A blurb context, to improve the code overall for data on the votes and comments count, was attempted but due to skill and errors, it could not be completed at this stage which is a shame.<br>


User experience could benefit from having different fields when it came to votes. This could of included up voting, down voting or even loving a particular blurb. This would mean greatly developing the votes counted fields or even having a separate aspect within an API model to get these results.<br>

Users being able to share content is a good platform, but they would have had a much better experience if that platform could include clips and videos such as movie trailers or an own video.<br>

A drop down menu for the user to select a category when submitting a blurb should of been implemented. This category would of offered a separate selection of fields to choose from for the user to filter out the posts. They would have been Spring, Summer, Autumn and Winter. This would of given the user at extra individual touch to the blurbs they could post and filter out by. For example, they could filter out and look at all the blurbs relating to 'Winter' category. Or they could have posted blurbs and selected a category for that blurb to be a 'Spring' time blurb. This would have given the user another filtering option then most votes and most followers.<br>

<br>

<hr>

<br>


# Intialise REACT project.

No student template has been added to this project due to conflicting information with the [React](https://react.dev/) Application. A workspace for coding was created in [Github](https://github.com/) and opened into the coding enviroment, [Gitpod](https://www.gitpod.io/).<br>
App.js page holds alot of the routes dor which data to display.<br>

To initilise  the [React](https://react.dev/) Application the command in the terminal used was : **npm install** for a [Javascript Package Manager](https://www.npmjs.com/)<br> This installs all the files neeeded for a [React](https://react.dev/) Application start point.<br>

Depending on version that works a version may have ot be used. In this case extra code needed entering to ensure the project would run.<br>
CLI input enter enter time the workspace was run in a browser:<br>
- **nvm install 16.18.0**
- **nvm use 16.18.0**
- THEN **npm start** can be entered.<br>
  REPEAT EACH TIME WHEN RUNNING SERVER.<br>
Once the API and the [React](https://react.dev/) project repositories were combined, the node version module (nvm) input, had to be entered within the frontend current directory. CLI input to navigate here: **cd frontend**<br>
A proxy error (see errors in [Testing](testing.md)), would show untill I entered, in a separate terminal for api_5 main directory, CLI input: **python manage.py runserver**<br>
Both of these combined, would run my developemental project in the URL. See 'combining projects' for further details.<br> [Combining project](#combining-react-project-and-drf-api)
<br>
Set up installations in 'project_5'.<br>
-  Enter into CLI: <br>
    -  **pip install django** ( pip3 install 'django<4>' - used here as prefered for Long Term Support (LTS)').<br>
    These two below are the same for the React frontend repository.
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

[React Router](https://reactrouter.com/en/main )handles routing for URL's to render different pages within the webpage.<br>
CLI input for installation - **npm install react-router-dom@5.3.0**
The library controls what the user sees depending on what is returned in the HTML.<br>
<br>
Routes to switch need to be added to the Index.js file including App.js.<br>
<img src="frontend/src/assets/images/readme-images-frontend/routechaning.png" width=30% height=30%><br>
Paths for switching betweeen pages are added to the App.j file.<br>
<img src="frontend/src/assets/images/readme-images-frontend/routeappjs.png" width=20% height=20%><br>
<br>

### React Navigation.
[React NavBar](https://react-bootstrap.github.io/docs/components/navbar) helps install a layout for a standard navigation bar where users can more around the website and the navigation bar remains to every page.<br>
<img src="frontend/src/assets/images/readme-images-frontend/navbar.png" width=30% height=30%><br>
A dropdown menu displays for smaller screens.<br>
<br>
<img src="frontend/src/assets/images/readme-images-frontend/navbardrop.png" width=30% height=30%><br>
Wrap 'App' conponent inside <Router> on App.js page.
<br>

## React components.

## Axios Library.

Used to tell this [React](https://react.dev/) App to send request to the API. Enables they to communicate for better data transfer and changes.<br>
Using [Axios](https://axios-http.com/) also enabled combining workspaces between [React](https://react.dev/) frontend and API backend.<br>
CLI input - **npm install axios**

## INFINTE SCROLL LIBARY<br>

**npm install react-infinite-scroll-component** <br>

### Infinite Scroll.

The Infinite Scroll component can be used from [React](https://react.dev/) so owners can continue scrolling while new content loads automatically. Pagination is set to show 10 blurbs per page but with infinite scroll set, the user can keep scrolling while new content loads.<br>
This is hard to demonstrate in a picture, but after 10+ blurbs are created the [React](https://react.dev/) component will function.<br>
<br>
Installing input for CLI: **npm install react-infinite-scroll-component**
This was installed in the terminal in the [React](https://react.dev/) frontend codespace - /workspace/api_5/frontend.<br>
<br>
The 'next' element was set in the API to hold a URL to the next page, aswell as previous. This is used in the props for infinite scroll to access this feature.<br>
<img src="frontend/src/assets/images/readme-images-frontend/next1.png" width=20% height=20%><br>
<br>
Issues were faced within development mode using this component due to Gitpod error. It would continue to display the spinner prop with loading the next page fo the API.<br> 
The correct results will be shown in production of the project with continued scrolling.<br>

<img src="frontend/src/assets/images/readme-images-frontend/InfinitescrollError.png" width=30% height=30%><br>
<br>

Noted topic within slack community here: https://app.slack.com/client/T0L30B202/search <br>

### React Bootstrap Form
<br>

[React Bootstrap Form](https://react-bootstrap-v4.netlify.app/components/forms/)<br>
Other Bootstrap items have been use throughout the project. Within the Form section alone, React Bootstrap classes called Images, Column, Row and Button have been used.<br>
[React](https://react.dev/) provides a boilerplate for individual coding to be added. This exmaple includes boilerplate and some starting code to transform it.<br>
<img src="frontend/src/assets/images/readme-images-frontend/ReactExample.png" width=30% height=30%>
<br>

### Context Hooks Refactoring

In [React](https://react.dev/) Frontend, context hooks were created to lessen coding in certain files sush as App.js. This helped refactor and organise code when developing.
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
<img src="frontend/src/assets/images/readme-images-frontend/contexthookNavBadLogInForm.png" width=10% height=10%><br>

<hr>

[Back to the top](#walking-seasons)

<hr>

# CRUD.

CRUD stands for Create, Read, Undo and Delete. This is four interactions the developer or the user can have with a website on either the frontend or the backend.<br>
[Django Signal](https://code.djangoproject.com/wiki/Signals) can be used for creating, retrieving, viewing and deleting data within the backend API.<br>
<br>
For [React](https://react.dev/) Frontend, CRUD is also implemented for users to safely create blurbs without others being able to delete their content. If the owner wishes to update, edit or delete they can do so on their own content via the EDIT and DELETE links.<br>
<img src="frontend/src/assets/images/readme-images-frontend/EditDelete.png" width=10% height=10%><br>
<br>

Deleting and creating a vote can be done by the owner, if they dont own the blurb. Users will also be able to create a 'follow' and delete the 'follow' request to 'follow and unfollow' particular users. Again, this will be controled by the user being logged in as a particular user.<br>
<br>

Editing and deleting fields are accessed via dropdown menu when clicking on the 'edit icon'. This image displays a user 'twofishes' being logged out and in. The icon is only avaliable when the user is logged in, for their own comment fields.<br>
<img src="frontend/src/assets/images/readme-images-frontend/editfieldcomment.png" width=10% height=10%><br>

# Django Rest Framework for an application programming interface (API).

Install [Django Rest Framework](https://www.django-rest-framework.org/).<br>
- CLI input - **pip install djangorestframework**<br>
- Add to INSTALLED_APPS as - **'rest_framework',** (with comma).<br>
- APIviews used for extra functionality for receiving instances, handling errors and adding context to Response objects and instances.

One workspace holds the API developed, for use with connection to Project 5, for backend storage for user interface requests.<br>
This is built to hold models, serializers, views and urls to display content using [React](https://react.dev/) for the frontend of the project named, Project 5.<br>
This project contains storage and responses for HTTP requests, JSON Web Tokens for authentication, permission and to tell user input apart from other user input.<br>
The Django Rest Framework replaces the use of many HTML pages and displays the information requests using the [React](https://react.dev/) Frontend project, Project 5.<br>
<br>
Authentication for each user can be checked and monitored, for example, only a user of a certain profile can edit their information fields.<br>
In this example the owner of the profile is revealed as True and the user not logged in, is viewed as false.<br>
This can be built up, to access user information and their pertaining objects for manipulation depending on authenication criteria.<br>
<img src="assets/images/readme-images/AuthTF.png" width=40% height=40%><br>

<hr>

<br>


## Serializers.
Data needs to be deserialized and serialized for the API to VIEW, GET, PUT, UPDATE and POST details from the models in views using serializers from the Rest Framework.<br>
<img src="assets/images/readme-images/JSON select.png" width=50% height=50%><br>
As Applications are developed and models created, more serializers will be used to create JSON files for data manipulation when sending and receiving from the backend, to the frontend of the website.<br>
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
<br>
API repository was built separatley to the [React](https://react.dev/) frontend, then combined at a later date to help reduce issues such as CORS errors.
<hr>
This will need to be rebuilt during production to 

[Heroku](https://dashboard.heroku.com/login).<br>

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
Imported into **profiles** app into **models.py**. <br>
- **from django.db.models.signals import post_save.**

- Import model created into **profiles** **admin.py**.
    - **from .models import Profile**
<br>

[Django](https://www.djangoproject.com/) is used to create url paths.<br>
<img src="assets/images/readme-images/urls.png" width=30% height=30%><br>
This method was repeated to create other applications within the workspace.<br>
<hr>

[Back to the top](#walking-seasons)

<hr>


## Access Admin panel
Create superuser, input for CLI:<br>
**python manage.py createsuperuser**<br>
Enter a Username and a Password. Skip email for easier option.<br>
A main user can be used to access this panel and other members can be added to it with different sercuity levels.<br>


### Authenication.
Authenication is important so a user will have the ability to view, create, edit and delete their own blurbs and comments.<br>
Using authenication of a user, only the logged in user can remove their vote that they have created.<br>
<br>
To further user experience, ease for authenication situations, 

[Django Rest Auth](https://pypi.org/project/dj-rest-auth/) can installed.<br>

CLI Input - **pip3 install dj-rest-auth==2.1.9** <br> (2.1.9 not necessary in input if different version preferred.) <br>
Followed by adding it to INSTALLED_APP in settings.py.<br>


[JSON web tokens](https://jwt.io/) (JWT) securely transmit data between and server as JSON objects. JWT are stored on the client side and they can be refered to as 'stateless'.<br>
Using Django's built in authenication module relies on Sessions for data storage. User experience can be improved with use of these sercuity measure which can deal with access and refresh tokens.<br>
<br>

Raw JSON data can be manipulated for a better user experience. Within the administraion panel, to update items such as the Profile Application, a more user frendly approach can be used by setting the serializer class on a view, [Django Rest Framework](https://www.django-rest-framework.org/) sets it out in a form format automatically.<br>
<br>
The Bad Request can be shown here as a method to catch and raise errors.<br>
<img src="assets/images/readme-images/RawJSON.png" width=20% height=20%><br>
Status is OK and the input fields look much better for user and clients to input data.<br>
<img src="assets/images/readme-images/Jsonform.png" width=20% height=20%><br>

[Simple JWT](https://pypi.org/project/djangorestframework-simplejwt/) tokens will be used in production and for development, sessions is used.<br>

INSTALL CLI COMMAND<br>
**pip install djangorestframework-simplejwt**<br>
<br>


### Set timestamp.

As token refresh was making uneccessary requests for unauthorised users when starting application interaction, adjustments were made so extra requests did not activate. The npm used was [jwt decode]() to store a local time stamp in the users brower for refresh tokens. Before making an attempt to refresh access tokens, code input would check the timestamp exists. This would also be removed after expiring.<br>
**npm install jwt-decode**<br>
<img src="frontend/src/assets/images/readme-images-frontend/setToken.png" width=10% height=10%><br>
<br>

### Register
If a user would like to register [Django REST Auth](https://www.django-rest-framework.org/api-guide/authentication/) offers a standard registration process to install. <br>
CLI input - **pip install 'dj-rest-auth[with_social]'**<br>
Full information for the process can be accessed here: https://pypi.org/project/dj-rest-auth/ <br>
<br>
Use of the [Django Rest Authentication](https://pypi.org/project/dj-rest-auth/) library enable handling of registraion, login, logout, user and token refresh.<br>
Credited from Code Institute is a map of dj-rest-auth endpoints for an API.<br>
<img src="assets/images/readme-images/djrestauth.jpg" width=20% height=20%><br>

<br>

<hr>

[Back to the top](#walking-seasons)

<hr>


# Technologies.

Content includes a range of technologies to create the frontend and back end portions of this project to help the function and to improve the development, aesthetics, functionality and compatability.<br>
<br>
Some installations are necessary and more can be added to improve the website service and usefulness.


## Github and Gitpod.

A workspace for coding was created in [Github](https://github.com/) and opened into the coding enviroment, [Gitpod](https://www.gitpod.io/).
[Github](https://github.com/) offers a platform and cloud-based service for software development and allows management and storage for code.
[Gitpod](https://www.gitpod.io/) is open source developer platform ready for coding. Adding, commiting and pushing new work can be completed from the Command Line Interface [CLI](https://www.freecodecamp.org/news/how-to-use-the-cli-beginner-guide/), aswell as installing new packages, libraries, frameworks or programmes with pre-written code that can introduce into a new project to improve it.<br>

**git add . ( . to add all, or speicify)<br>
git commit -m "message"<br>
git push<br>**


## Starting Installations.

Steps to take for Starting a [Django Rest Framework](https://www.django-rest-framework.org/) based [API](https://www.ibm.com/topics/api).<br>


### Django.

[Django](https://www.djangoproject.com/) is installed as the Python based web development framework.<br>
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

### Procfile
Procfile. (Capital **P** needed.)<br>
<img src="frontend/src/assets/images/readme-images-frontend/Procfile.png" width=10% height=10%>

A mechanism for declaring what commands are run by the application’s dynos on the platform, [Heroku](https://dashboard.heroku.com/login).
[Procfile](https://devcenter.heroku.com/articles/procfile) information.<br>


### POSTGRESQL LIBARY - ELEPHANTSQL.

[ElephantSql](https://www.elephantsql.com/) hosted the Database for storing data to be used within a cloud.

CLI input - **pip3 install dj_database_url==0.5.0 psycopg2**.<br>
Import dj_database_url into settings.py file.
See Deployment for further deployment details relating to this.<br>
<br>
Create a new instance in the appropriate region and then copy the URL to use in config vars in setting for 

[Heroku](https://dashboard.heroku.com/login) deployment. <br>
<br>

<hr>


### MIGRATE CHANGES

Migrate changes are needed for each new App or change to the App.<br>
This includes new models or again, any changes too.<br>
They are slightly tempermental with changes, after a migration has occur, so take care.<br>

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

[ElephantSql](https://www.elephantsql.com/) databade offered a method to reset the database, when issues arose with migrations, during development but, Tutor Support via [Code Institute](https://codeinstitute.net/) was sort after for this due to further errors that can be caused. This method may not be suitable when working with a team without consultation.<br>

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


[Django Generic Filtering](https://www.django-rest-framework.org/api-guide/filtering/) is used and offers better organisation of data for the users viewing pleasure in the backend API.<br>
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
Steps to take from [Code Institute](https://codeinstitute.net/) CourseWork. This enabled the [React](https://react.dev/) and API projects to be unified.<br>
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
CLIENT_ORIGIN_DEV needed removing from Config Vars in Heroku.<br>
<img src="assets/images/readme-images/combine6.png" width=30% height=30%><br>
<br>
<img src="assets/images/readme-images/combine7.png" width=30% height=30%><br>
<br>



# Deployment for API.

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
In preparation for use with [React](https://react.dev/) Frontend, a view extra steps took place including adding root route, pagination to ListViews, providing a default JSON renderer and formtatting for date and time with the API development.<br>
<br>

# Deployment for both applications for Advanced Front End Project.

Guide for deploying both [React](https://react.dev/) frontend and Django API backend using [Whitenoise]() will store static files for the Django Admin panel.<br>

COMMIT ANY CHANGES BEFORE DEPLOYMENT! <br>
**git add .** <br>
**git commit -m "commit message here"** <br>
**git push** <br>

<br>

1. From root directory (main) CLI: **pip3 install whitenoise==6.4.0** (Add to requirements.txt file **pip3 freeze > requirements.txt**)<br>
<br>

2. Create New folder **staticfiles** in main root using CLI: **mkdir staticfiles** <br>
<br>

3. In **settings.py** add <em>'django.contrib.staticfiles',</em> to INSTALLED_APPS <em>above</em> 'cloudinary_storage', to avoid interference.<br>
<br>

4. In **settings.py** in MIDDLEWARE add **'whitenoise.middleware.WhiteNoiseMiddleware',** *below* **.SecurityMiddleware** and *above* **.SessionMiddleware** <br>
<br> 

5. To tell Django and Whitenoise where to look for Reacts *index.html* in final deployment.<br>
   In **settings.py** in TEMPLATES add to DIRS key code add between [],: **os.path.join(BASE_DIR, 'staticfiles', 'build')**<br>
<br> 

6. Tell Django and Whitenoise where to look for admin and [React](https://react.dev/) static files on deployment. In **settings.py** 'static file section'<br>
   Add **STATIC_ROOT = BASE_DIR / 'staticfiles'** <br>
   Add **WHITENOISE_ROOT = BASE_DIR / 'staticfiles' / 'build'**<br>
<br> 

Now, configuring the route allows for [React](https://react.dev/) frontend viewing. Ensure the home page of the [React](https://react.dev/) frontend is shown and not the API.<br>
Redirect 404 errors to [React](https://react.dev/) application using react-route-dom.<br>
API URL's are adjusted to ensure no clashing with [React](https://react.dev/) application's routes by adding **/api_5/**<br>

7. In **urls.py** remove *root_route* from imports. Add **from django.views.generic import TemplateView** at the top.<br>
Then to *urlpatterns* remove *root_route* from the path and replace with **path('', TemplateView.as_view(template_name='index.html')),**<br>
Add 404 handler at the bottom of urlpatterns in urls.py.<br>
<img src="frontend/src/assets/images/readme-images-frontend/handler404.png" width=40% height=30%><br>

8. Add **api/** to all API URLs but NOT home page or admin panel path().<br>
<img src="frontend/src/assets/images/readme-images-frontend/apipath.png" width=40% height=40%><br>
<br> 

9. In **axiosDefault.js** set baseURL to **"/api";** for API requests in [React](https://react.dev/) application.<br>
<br>

10. Collect admin and API staticfiles into the empty staticfiles directory created earlier.<br>
CLI: **python3 manage.py collectstatic**<br>
<img src="frontend/src/assets/images/readme-images-frontend/collectstaticfiles.png" width=40% height=30%><br>

11. IN A SEPARATE TERMINAL *cd* into *frontend* using CLI: **cd frontend** <br>
Should be in '/workspace/api_5/frontend' <br>

<br>

12. Run command to compile and move [React](https://react.dev/) files.<br>
**npm run build && mv build ../staticfiles/.** <br>
<img src="frontend/src/assets/images/readme-images-frontend/Compile.png" width=40% height=30%><br>
<br>

**IMPORTANT NOTE** above command in bullet point 12 will need re-running after any changes to the static files in the project, including to [React](https://react.dev/) code.<br>
*DELETE* existing folder and rebuild. <br>
This Command will delete old folder and replace with new folder, run CLI:<br>

**npm run build && rm -rf ../staticfiles/build && mv build ../staticfiles/.**

13. Create file in root directory called **runtime.txt** <br>
    Add correct version of [Python](https://www.python.org) for [Heroku](https://dashboard.heroku.com/login).<br>
    **python-3.9.16**
<br>
<hr>

**TESTRUN**

<hr>
- Terminate running servers using **CTRL + C**<br>
- In **env.py**, comment out both DEBUG and DEV environment variables.<br>
- Run Django server **python3 manage.py runserver** <br>
- Check Django is serving the React static files by previewing the running application on **port 8000** <br>
<img src="frontend/src/assets/images/readme-images-frontend/8000port.png" width=40% height=30%><br>

COMMIT ANY CHANGES BEFORE DEPLOYMENT!

Within [Heroku](https://dashboard.heroku.com/login) for deployment.
- Log in and access API application. This project **api-5** <br>
- In settings, open Config Vars.<br>
- Set ALLOWED_HOSTS key to combined project url value and *remove trailing slash from the end and http:// from the start*. <br>
- Set a new CLIENT_ORIGIN key to the url value of the combined project *keep the http:// but remove the trailing slash still.*<br>
Config vars before. <br>
<img src="frontend/src/assets/images/readme-images-frontend" width=40% height=30%><br>
Config vars after.<br>
<img src="frontend/src/assets/images/readme-images-frontend" width=40% height=30%><br>
<br>
- Ensure All deployment criteria from the Django REST Framework module were complete too.<br>
This project was connected to 

[Github](https://github.com/) repository. Manually deployed on main branch.<br>
- Test Deployment from **Deploy** tab. 
<hr>

## Heroku Logs

Install to view logs in CLI. <br>
**npm install -g heroku**<br>



### SERVER GUNICORN

To run [Django](https://www.djangoproject.com/) on, for [Heroku](https://dashboard.heroku.com/) devlopment for allowing cross origin resourse sharing.<br>

CLI input - **pip3 install 'django<4' gunicorn**.<br>
CLI input **pip3 install gunicorn django-cors-headers**<br>
<br>
Add to requiremnts.txt file and add to INSTALLED_APPS and MIDDLEWARE in settings.py. <br>

[Back to the top](#walking-seasons)

<hr>


## Clone website.

All installing and requirements for this project have to be completed correctly before a Clone of the website can be created. <br>

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

2. [Code Institute](https://codeinstitute.net/) for providing a React front end project to build called 'Moments'. Aswell as a Django Rest Framework API.<br>

3. [Stack OverFlow](https://stackoverflow.com/questions/61694370/why-is-alert-not-showing-on-my-react-app) for React Alert not showing.<br>

4. [CORS](https://stackoverflow.com/questions/28046422/django-cors-headers-not-work) error tips.<br>

5. [Stack Overflow](https://stackoverflow.com/questions/11488974/django-create-user-profile-on-user-creation) for checking model creation in API.<br>

6. [Infinite Scroll props](https://stackoverflow.com/questions/69926202/how-can-i-not-pass-children-as-props-instead-nest-children-between-the-opening) were attempted with improvements.<br>


[Back to the top](#walking-seasons)

<hr>


# Awknowledgements.
To the **Tutor Support** team for [Code Institute](https://codeinstitute.net/) for continued support and assitance.<br>
To mentor **Precious Ijege** for continued support and patience while taking part in the course provided by [Code Institute](https://codeinstitute.net/) for a Diploma in Full Stack Software Development.<br>
To the Walkthrough projects of both <em>'Moments'</em> and <em>'DRF-API'</em>, mini projects supplied by [Code Institute](https://codeinstitute.net/) Coursework.<br>

<hr>

[Back to the top](#walking-seasons)

<hr>