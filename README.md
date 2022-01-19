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

For this application, the requirement is Node 12 or newer. There are many guides online for installing Node. I personally recommend [this one from Microsoft](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).

### Installing the application

After installing Node (hopefully successfully), the order of installation goes as such:

1. Compiling the server. This is done in the root folder with `sh npm run server:install:compile`, which installs the dependencies for the server and compiles TypeScript code back into regular JS.
2. Temporarily starting the server in order to build the frontend. This is done by running `sh npm --prefix ./server/ start`. Keep this running for now.
3. Open another terminal in the project root folder, and run `sh npm run front:install:build` to compile the frontend. The reason we want the backend running is for Next.js to create static pages from the data the API returns in case the backend goes down.
4. After the frontend has completed building, you may shutdown the server.

### Final prerequisites

If you wish to run this on your own machine, be prepared to create a free MongoDB Atlas account if you don't already have one. After, you should create a _.env_-file, with a structure something like below, replacing all the details within brackets with your own. Note that the port is where the server will run, though you can change this if you wish to run it on a different port.

`node MONGODB_URI=mongodb+srv://<user>:<password>@<cluster address>/library?retryWrites=true&w=majority PORT=8080`

## Executing

### Production

To run the frontend and backend in production mode, like when deploying to Heroku or other hosting providers, you want to run _start:production_ which starts both sides in production mode. After, you can navigate to domain you deployed the application(s) to see if they've appeared there.

### Development

If you want to develop this application further, or just see what's going on under the hood, you want to run _start:dev_ in order to really see all the magic. This starts concurrently which in respect renders all the logs and errors in a single terminal for ease of interfacing with the information.

### Heroku deployment

This application _should_ be available at [https://library-ex.herokuapp.com/](https://library-ex.herokuapp.com/) at the time of writing, and free to browse by anyone. If not, please refer [here to see how to get your own copy](#installation).

## Troubleshooting

### Neither frontend or backend will run

Run `sh npm run front:install:build` and `sh npm run server:install:compile` in the project root folder one after the other. You can also combine them with an `&&` operator to make them run together!

### Backend will not run or is outdated

You need to compile the TypeScript project files back into CommonJS for Node to be able to read them. You can do this by simply running `sh npm run build`.

### Heroku instance is down

This is most likely some error I have not yet been able to fix. You can always spin up a local edition to try the application out.

### Mongoose can't connect to a database

Remember to add your connection URI to the environment variable file.

## Closing words

All in all, I've spent roughly 20 hours on this over three days, and there is a lot more I would've done such as full deployment to Heroku and unit tests. However at this stage the project has reached its specifications, and is ready to be displayed. Enjoy.
