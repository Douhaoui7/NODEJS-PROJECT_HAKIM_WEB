exports.get404 = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Introuvable, veuillez revenir à la page principal!', path:'/404'});
  };
  