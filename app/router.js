const router = require('express').Router();

const mainController = require ('./controllers/mainController');

router.get('/', mainController.home);

router.get('/apropos', mainController.about);

router.get('/realisations', mainController.home);

router.get('/contact', mainController.about);

router.use(mainController.notFound);

module.exports = router;