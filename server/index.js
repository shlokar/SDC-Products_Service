const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../react-client/dist')));

const router = require('./routes');

app.use('/user/', router);

// Put routes here

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
