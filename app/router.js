const router = require('express').Router();

const mainController = require ('./controllers/mainController');
const contactController = require('./controllers/contactController');

router.get('/main', mainController.home);

router.get('/apropos', mainController.about);

router.get('/realisations', mainController.realisations);

router.post('/contact', contactController.contact);
router.get('/contact', mainController.contact);



router.use(mainController.notFound);

module.exports = router;