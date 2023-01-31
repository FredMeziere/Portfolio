require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.static("public"));

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');


app.get("/", (req, res) => {
    res.render('accueil');
  });


app.listen(port, () => {
console.log(`Server ready : https://localhost:${port}`);
});






