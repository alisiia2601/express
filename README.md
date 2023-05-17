Endpoints
GET /movies
Retrieves a list of all movies.
URL: http://localhost:3000/movies

GET /movies/:id
Retrieves a specific movie by its IMDb ID.
URL: http://localhost:3000/movies/{id}

POST /movies
Adds a new movie to the database.
URL: http://localhost:3000/movies

PUT /movies/:id
Updates an existing movie in the database.
URL: http://localhost:3000/movies/{id}

DELETE /movies/:id
Deletes a movie from the database.
URL: http://localhost:3000/movies/{id}

Make sure to replace {id} with the actual IMDb ID when testing the endpoints.

Testing with Postman
To test the API using Postman, follow these steps:

Start the server
Open Postman and set the request URL to http://localhost:3000/movies.
Choose the appropriate HTTP method (GET, POST, PUT, DELETE) based on the endpoint you want to test.
Click the "Send" button to send the request.
Review the response received from the API.
Adding an API Key
To include the API key in your requests, append the apiKey query parameter with a valid API key. 

