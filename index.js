const express = require('express');
const moviesRouter = require('./routes/movies');
const authentication = require('./authentication');
const apiKeysRouter = require('./apiKeys');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.use('/api-keys', apiKeysRouter);
app.use('/movies', authentication); 
app.use('/movies', moviesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
