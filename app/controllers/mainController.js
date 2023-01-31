const mainController = {
    home: (req, res) => {
      res.render('main/accueil');
    },
    notFound: (req, res) => {
      res.status(404).render('main/notFound');
    },
  };
  
  module.exports = mainController;