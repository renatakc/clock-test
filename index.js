var express = require('express');
//var datetime = new Date();
console.log("Created datetime")
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
  var datetime = new Date();
  res.send({ express: 'Hello From Express', datetime});
});


app.listen(port, () => console.log(`Listening on port ${port}`));