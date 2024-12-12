var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var ingredients = [
  {
    id: "232KAK",
    text: "Eggs",
  },
  {
    id: "332KAK",
    text: "Milk",
  },
  {
    id: "432KAK",
    text: "Sugar",
  },
  {
    id: "532KAK",
    text: "Honey",
  },
  {
    id: "632KAK",
    text: "Flour",
  },
];

app.get("/", function (request, response) {
  response.send(ingredients);
});
app.post("/", function (request, response) {
  var ingredient = request.body;
  if (!ingredient || ingredient.text === "") {
    response.status(500).send({ error: "Your indredient has no  sauce text" });
  } else {
    ingredients.push(ingredient);
    response.status(200).send(ingredients);
  }
});
// app.get("/Earth", function (req, res) {
//   res.send("Yo welcome to Earth Alien!");
// });
//
app.listen(3000, function () {
  console.log("First API running on port 3000!");
});
