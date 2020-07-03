# Striva

[Striva Heroku](https://striva2.herokuapp.com/)

Striva is a web application for users to create, share, and log their workouts. Inspired by Strava, Striva allows users to create their favorite running routes, view a list of their exercise activities overtime, and track their progress all while sharing it with friends! 


![alt text](https://github.com/jlamb916/Striva/blob/master/app/assets/images/Striva_splash.png "Striva splash page")


# Features

* User accounts with secure frontend and backend authentication

![alt text](https://github.com/jlamb916/Striva/blob/master/app/assets/images/signinpage.png?raw=true "Striva sign up")

* Advanced route creation utilizing MapBox match api
* Feed that shows all user's recent activity

![alt text](https://github.com/jlamb916/Striva/blob/master/app/assets/images/index.png?raw=true "Striva routes")

![alt text](https://github.com/jlamb916/Striva/blob/master/app/assets/images/create_route.png?raw=true "Striva route creation")

* A list of stats for workouts and routes the user has created
* Follow other users to view, comment, and kudo their workouts (In Progress)
* Searching for other users and their workouts (In Progress)

# Project Design

Striva was designed and built in 10 days!

A proposal was drafted alongside a database schema to help provide an implementation timeline during the development process.

# Technology
Striva is a single-page application built on Rails, React.js, hosted on heroku, and other additional dependencies

## Backend

* Rails MVC
  * Ruby on rails is the primary backend framework used to manage our backend data as well as the request response cycle.

* Database
  * PostgreSQL RDBMS

* Dependencies
  * BCrypt for password-salting and hashing for a secure authentication system
  * Amazon Web Services SDK for file storage on Amazon Simple Storage Service (S3)
  
## Frontend

As a single-page application, Striva utilizes React.js and redux framework to deliver the frontend. 

* npm
  * Node package manager (npm) is used to install the frontend dependencies.

* Webpack
  * Webpack bundles all of the frontend files and includes it in the main application.js file for convenient app management.

* React & Redux
  * React is used to create our frontend component with redux as a our frontend state management tool.

* jQuery
  * jQuery is only used to make AJAX requests with the Rails server.

* Babel
  * Babel is used to transpile our jsx code into html.
  
 * Mapbox API
   * Mapbox is mapping software that renders a high-resolution map onto the screen with user interactivity. It enables route viewing, creation as well as the creation of the lovely static images on the site.
  
# Future Implementations

Striva is far from being considered a full fledged MVP, but more features are coming soon!

* Features coming soon
  * Activities creation and viewing
  * Social media features such as following users and giving kudos to other activities
  * A feed of all recent activity by a user and friend
  * Additional stat tracking features to monitor recent activity
