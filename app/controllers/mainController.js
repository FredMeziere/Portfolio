const mainController = {
    home: (req, res) => {
      res.render('main/accueil');
    },
    notFound: (req, res) => {
      res.status(404).render('404/404');
    },
  };
  
  module.exports = mainController;