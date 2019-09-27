const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("app/public"));


require("./controllers/burgers_controller")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

