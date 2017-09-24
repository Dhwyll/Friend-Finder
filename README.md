# Friend-Finder
Working with Express, Body-Parser, and Path

This program is basic full-stack site.  It creates a front page that has a link to a secondary page which is a survey.

Node is running the back end, ```server.js```.  This file sets up the port and provides routing for the HTML and API requests.

In the ```routing``` folder are the routing files for HTML and API requests.  htmlRoutes serves up the *home* and *survey* pages while apiRoutes has two functions:

1. *api/friends* returns a JSON object of the *friendsData* array (see below).
2. *api/survey* runs the actual logic for the *survey* page (see below).

Information for the site is stored in the *data* folder in *friends.js* file.  It is an array of objects that hold each person's information.

The site works as follows:

When the user goes to the *home* page, they are given a welcome screen with a button to take them to the survey page.  When clicking on it, it loads the *survey* page.

The *survey* page then asks for the user's name, a link to the user's photo, and then presents a series of questions.  All questions are required and the page will validate to ensure that all fields have data.

When the user submits the questions, it does a POST to the API which then finds the person in the *friendsData* array that most closely matches.  This is done by summing all responses and finding the entry in the *friendsData* array that is closest to that sum (either positive or negative).  Upon finding the person in the array that matches, it returns that person's information in JSON format and pushes the user's information into the *friendsData* array for future matches.

The *home* page then displays a modal that displays the match's name and photo.  If the person matched has not entered a valid image, it loads a default image.

This site uses the following pacakges for Node (be sure to ```npm install```):

express  
body-parser

This site uses the following packages for the front end:
  
JQuery  
Materialize  
Materialize Icons  
Font Awesome Glyphicons
