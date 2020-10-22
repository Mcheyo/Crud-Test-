# Song Project

## Tech Stack
NodeJS, MongoDB (with Mongoose), and Docker.

## Pre-reqs
Docker and docker-compose should be installed locally

## Goal
Create a clean mock API with tests

## Background
You have a cloud service which allows musicians to upload songs they have recorded. Each song belongs to only one musician, and each musician can have many songs in their account.

You are tasked to create CRUD events for the songs API.

Use a User collection to represent each musician, and a Song collection to represent each recorded song.

## Description
1. Create the User and Song mongoose models

A user should have an email and username. A song should have a title, album name, and duration.

2. Create a CRUD API for the songs

Use this as a starting point.
```
// import User and Song models here

module.exports.create = async (input, { authenticatedUser }) => {
  // code here
}

module.exports.read = async (input, { authenticatedUser }) => {
  // code here
}

module.exports.update = async (input, { authenticatedUser }) => {
  // code here
}

module.exports.delete = async (input, { authenticatedUser }) => {
  // code here
}
```

authenticatedUser represents the user using the API, and should be an object with a `user_id` and `username` field. (Don't worry about exposing these functions via HTTP or anything, we're just going to write tests to validate them in step 3).


_Create_
inputs: title, album name, and duration
output: the created song object

_Read_
input: song id
output: the song object

_Update_
This should be able to update the title or album name.

output: the updated song object

_Delete_
This should be able to delete the song

3. Write tests to validate the CRUD events you wrote for the song API. Feel free to mock any data at this step, and cover any important checks or cases.

Each test should create any Users that it would make sense to, and provide the authenticatedUser object with the `user_id` and `username`.

4. (Optional) If you're familiar with Docker, please provide a file called `docker-compose.test.yaml` which can run the tests you've written, and output the test results. Feel free to refactor the existing docker-compose.yaml if desired. (This simulates running the tests in a CI environment)

5. (Optional) Write a quick description of a system design you would use for this app: How would you handle the upload/storage of the actual audio files, instead of just the meta data? How would you deploy these Docker containers? Feel free to include anything you have experience with (AWS, container orchestration). <100 words

## Notes
Don't worry about exposing these CRUD functions via HTTP or anything. We're abstracting that away, and just proving the business logic works using the tests.

Assume that authenticatedUser passed into each function is an object that magically has the `user_id` and `username` with each request. Don't worry about implementing that, you can assume the server does it for you. Just code each function assuming those fields are provided.


## Boilerplate
You're provided with a docker-compose.yaml file which creates the Node app for you and connects it to the Mongo database.

You can run it with `docker-compose up`