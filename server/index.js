const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
app.get('/api', function (req, res) {
  // res.set('Content-Type', 'application/json');
  res.json({"message":"Hello from the custom server!"});
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, console.log(`listening in on ${PORT}`))