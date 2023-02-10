require('dotenv').config();
const express = require('express');
const router = require("./app/router");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use(router);


app.listen(PORT, () => {
    console.log(`Server ready : http://localhost:${PORT}`);
});






