const express = require('express');
const moviesRouter = require('./routes/movies');
const authentification = require("./apiKey")

const app = express();
const port = 3000;

app.use(express.json());

app.use("/addApiKey", authentification)

app.use((req, res, next) => {
  authentification(req, res, next);
})

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.use('/movies', moviesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


