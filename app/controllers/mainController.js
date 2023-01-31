const mainController = {

/* Controlleur de toutes les routes du sites */

    home: (req, res) => {
      res.render('main/accueil');
    },
   
    about: (req, res) => {
      res.render('main/apropos');
    },

    realisations: (req, res) => {
      res.render('main/relisations');
    },

    contact: (req, res) => {
      res.render('main/contact');
    },

    notFound: (req, res) => {
      res.status(404).render('error/404');
    },
  };
  
  module.exports = mainController;