# JSON Frontend

A React Frontend for interacting with the backend project at The Bridge.
The Backend can be found [here](https://github.com/eduardpeters/json-backend).

## Usage

Clone the repository and `cd` into its directory. Run `npm install` (if you don't have Node and NPM installed, you will want to do that beforehand) to have all dependencies installed.

The frontend requires a `.env` file with the following contents to pair with the backend project:
- REACT_APP_BASE_URL="http://localhost:3001/"

Aftewards running `npm start` will start the project.

## Background and functionalities

This React App was built to make use of a series of endpoints constructed around serving a JSON file from the backend.

You will find you are able to interact with the sserved data in the following ways:
- See a list of all available heroes
- Select a hero to display all its information
- Edit some fields individually or edit the whole 'Hero' entry
- Delete the 'Hero' entry
- Close the displayed 'Hero' entry
- Create a new 'Hero' by clicking the Add button at the bottom
