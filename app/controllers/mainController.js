const mainController = {
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
      res.status(404).render('404/404');
    },
  };
  
  module.exports = mainController;