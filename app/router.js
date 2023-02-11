const router = require('express').Router();

const mainController = require ('./controllers/mainController');
const contactController = require('./controllers/contactController');


/*Route pour la view acceuil*/
router.get('/main', mainController.home);

/*Route pour apropos*/
router.get('/apropos', mainController.about);

/*Route pour la view réalisation*/
router.get('/realisations', mainController.realisations);

/*Route pour la view  contact ainsi que la route post pour le formulaire*/
router.post('/contact', contactController.contact);
router.get('/contact', mainController.contact);

/*Route lors des erreurs*/
router.use(mainController.notFound);

module.exports = router;