const cors = require("cors");
const express = require("express");
const routes = require("./routes/quote.routes");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Private-Network", true);
  app.use(cors());
  next();
});
app.use(express.json());

app.use(routes);

const port = process.env.PORT;

app.listen(port || 5002, () => console.log("Server up ina " + port));
