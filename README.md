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

To test the API using Postman, follow these steps:

Start the server
Open Postman and set the request URL to http://localhost:3000/movies.
Choose the appropriate HTTP method (GET, POST, PUT, DELETE) based on the endpoint you want to test.
Click the "Send" button to send the request.
Review the response received from the API.

API
Set the request method to GET and enter the URL: http://localhost:3000/api-keys
Click the "Send" button to make the request. 

To add a new API key, create another request in Postman.

Set the request method to POST and enter the URL: http://localhost:3000/api-keys.

