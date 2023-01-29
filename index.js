
const express = require('express');
const router = require ('./app/routers');

const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static(path.join(_dirname, './public')));

app.use(router);

app.listen(port, () => {
console.log(`Server ready : hhtps://localhost:${port}`);
})