# FoodLovers

## Setup

- Fork and clone this repository
- Run `json-server --watch db.json --routes routes.json` to get the backend started
- Open the `index.html` file on your browser

## Endpoints

Your base URL for your API will be: http://localhost:3000

The endpoints you will need are:

- GET `/recipe/1`
- PATCH `/recipe/1`
- POST `/comments`
- DELETE `/comments/:id`

## Core Deliverables

As a user, I can:

- See the recipe received from the server, including its image, title, likes and comments when the page loads
- Click on the heart icon to increase image likes, and still see them when I reload the page
- Add a comment (no persistance needed)

