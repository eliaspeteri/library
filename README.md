# library

## Table of Contents

0. [Opening words](#opening-words)
1. [Specifications](#specifications)
2. [Stack](#stack)
3. [Installation](#installation)
4. [Executing](#executing)
5. [Troubleshooting](#troubleshooting)
6. [Closing words](#closing-words)

## Opening words

This full-stack application has been created as a programming exercise for recruit purposes. No support is provided beyond the troubleshooting section listed further below, and use of the application is at own risk.

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

As per original specification, the UI is created with React through Next.js, and the author chooses to specifically use this framework in combination with TypeScript. Semantic UI React may be used for styling. Axios will be used to fetch data from the server. Backend will be provided by a combination of MongoDB, Node.js and Express.js. For article 7 of specifications, Concurrently shall be used in order to launch both backend and frontend into a single terminal.

## Installation

TODO

## Executing

TODO

## Troubleshooting

TODO

## Closing words

TODO
