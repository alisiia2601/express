const express = require('express');
const moviesRouter = require('./routes/movies');
const authentication = require('./apiKey');
const addApiKey = require('./apiKey');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.use('/movies', authentication); // Apply authentication middleware only to '/movies' route
app.use('/movies', moviesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
