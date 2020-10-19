const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path")

const scores = require('./routes/api/scores');

const app = express();

//bodyparser middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.log(err));

app.use('/api/scores', scores);

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
