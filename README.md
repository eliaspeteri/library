# library

## Table of Contents

0. [Opening words](#opening-words)
1. [Specifications](#specifications)
2. [Stack](#stack)
3. [Installation](#installation)
   1. [Required programs](#required-programs)
   2. [Installing the application](#installing-the-application)
   3. [Final prerequisites](#final-prerequisites)
4. [Executing](#executing)
   1. [Production](#production)
   2. [Development](#development)
   3. [Heroku deployment](#heroku-deployment)
5. [Troubleshooting](#troubleshooting)
   1. [Neither frontend or backend will run](#neither-frontend-or-backend-will-run)
   2. [Backend will not run or is outdated](#backend-will-not-run-or-is-outdated)
   3. [Heroku instance is down](#heroku-instance-is-down)
   4. [Mongoose can't connect to a database](#mongoose-cant-connect-to-a-database)
6. [Closing words](#closing-words)

## Opening words

This full-stack application depicting a regular library collection has been created as a programming exercise for recruit purposes. No support is provided beyond the troubleshooting section listed further below, and use of the application is at own risk.

## Specifications

The original task was to create a single-page web application (SPA) which manages a collection of books. The web application should have a UI consisting of a single HTML web page, and a simple backend. Backend is to be served by a REST API. The application should have following features:

1. When the web page is loaded, it fetches all the books to a list. The title and the
   author of each book are displayed in the list.
2. When a book in the list is clicked, it is selected and its author, title and description are
   displayed in a form next to the list.
3. By inputting data to the form and pressing a button labelled “save new”, the user can
   add new books to the collection.
4. By editing the form data of an existing book and pressing a button labelled “save”,
   the user can update the data of the book in the collection.
5. There is also a delete button that can be used to delete a selected book from the
   collection.
6. All the changes that user has made to the collection must be preserved on a page
   reload.
7. The application (front and backend) can be started with a single command in terminal

## Stack

As per original specification, the UI is created with React through Next.js, and the author chooses to specifically use this framework in combination with TypeScript. Semantic UI is used for additional styling. Axios will be used to fetch data from the server. Backend will be provided by a combination of MongoDB (through mongoose), Node.js and Express.js. For article 7 of specifications, Concurrently shall be used in order to launch both backend and frontend into a single terminal.

## Installation

### Required programs

For this application, the requirement is Node 12 or newer. There are many guides online for installing Node. I personally recommend [this one from Microsoft](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows). NB: I've moved to using Node 16, so in case the app ceases to work in older versions, [write a new issue in the repository page on Github](https://github.com/eliaspeteri/library/issues).

### Installing the application

After installing Node (hopefully successfully), the order of installation goes as such:

1. Building the application. This is done by running _npm run build_ in the root of the project folder with a terminal of your choice.
2. ???
3. Profit.

## Executing

### Production

To run the frontend in production mode, like when deploying to Heroku or other hosting providers, you can run _npm start_ which starts the app in production mode. After, you can navigate to the domain you deployed the application to in order to see if it has appeared there.

### Development

If you want to develop this application further, or just see what's going on under the hood, you can run _npm run dev_ in order to really see all the magic.

### Heroku deployment

This application is now available at [https://library-ex.herokuapp.com/](https://library-ex.herokuapp.com/), and free to browse by anyone. If not, please refer [here to see how to get your own copy](#installation).

## Troubleshooting

### npm start doesn't work

Make sure you built the app at least once before trying to run it in production mode. You can do this by running _npm run build_ in a terminal while in the root folder.

### Heroku instance is down

This is most likely some error I have not yet been able to fix. You can always spin up a local edition to try the application out.

## Closing words

All in all, I've spent roughly 20 hours on this over three days, and there is a lot more I would've done such as full deployment to Heroku and unit tests. However at this stage the project has reached its specifications, and is ready to be displayed. Enjoy.
