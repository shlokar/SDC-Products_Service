const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../react-client/dist'));

// Put routes here

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});