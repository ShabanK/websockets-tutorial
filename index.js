const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("we are here");
});

app.listen(5000, () => {
  console.log(`Server started on 5000`);
});

app.use(express.static("public"));
