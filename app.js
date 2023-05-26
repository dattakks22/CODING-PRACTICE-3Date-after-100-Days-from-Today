let addDays = require("date-fns/addDays");

let express = require("express");

let app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let outputDate = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  response.send(
    `${outputDate.getDate()}/${
      outputDate.getMonth() + 1
    }/${outputDate.getFullYear()}`
  );
});

module.exports = app;
