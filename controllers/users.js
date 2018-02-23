// GET /signup
router.get('/signup', (req, res) => {
    res.render('signup.hbs', { message: req.flash('signupMessage') });
  })

// POST /signup
router.post('/signup', (req, res) => {
    var signupStrategy = passport.authenticate('local-signup', {
      successRedirect : '/',
      failureRedirect : '/signup',
      failureFlash : true
    });

    return signupStrategy(req, res);
  })


// GET /login


// POST /login


// GET /logout


// Restricted page