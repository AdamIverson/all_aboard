const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const testRouter = require('./routes/test.router');

app.use('/api/test', testRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});