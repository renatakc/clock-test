var express = require('express');
var datetime = new Date();
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({ express: 'Hello From Express\n', datetime });

});

app.get('/date', (req, res) => {
  res.send({ express: datetime });
});

app.listen(port, () => console.log(`Listening on port ${port}`));