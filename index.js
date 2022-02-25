const express = require("express");
const app = express();
const { engine } = require('express-handlebars');

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static(__dirname + "/public"))
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist/css/bootstrap.css"));

app.get("/", (req, res) => {
  const productos = ["Platanos", "Cebollas", "Lechuga", "Papas", "Pimenton", "Tomate"];
  res.render('home', { productos });
});

app.listen(3000, () => {
  console.log("Server ON 😎");
});
