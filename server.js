const express = require("express");
const app = express();
const port = 9000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
