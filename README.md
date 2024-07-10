# Social Network API

## Description

- This API is for the website which can handle large amount of unstructured data by storing in NoSQL

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

1. open the terminal and type `npm install`
2. type `npm run seed` to seeding data into MongoDB
3. type `npm start` to start server
4. use insomnia to test the data
5. check data in mongoDB

## Usage
- index.js : this file is called first when run this app
- config/connection.js : config files for server connection
- models/* : used to define the structure and behavior of the data stored in a collection.
- routes/api/* : defining different routers for this application
- controllers/* :contain the logic that handles the requests coming from the routes   
- utils/ * : files for seeding when `npm run seed`

- video link : https://app.screencastify.com/v3/watch/FzgNuqcRLRbgnvszXR10
- repo link : https://github.com/namahage1/Social-Network-API.git