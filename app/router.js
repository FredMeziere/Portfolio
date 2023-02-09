const router = require('express').Router();
const express = require("express");
const app = express();
const contactController = require ('./controllers/contactController');
const mainController = require ('./controllers/mainController');

router.get('/main', mainController.home);

router.get('/apropos', mainController.about);

router.get('/realisations', mainController.realisations);

router.get('/contact', mainController.contact);

router.use(mainController.notFound);

module.exports = router;