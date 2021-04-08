const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/participants', function (req, res) {

  let inputName1 = req.session.data['participants']
  let inputName2 = req.session.data['participants'] 
  if (inputName1 === 'Usability testing' ) {
    res.redirect('/v1/request-volunteers/wcag')
  } else if (inputName2 === 'Other types of user research') {
    res.redirect('/v1/request-volunteers/what-phase')
  } else {
    res.redirect('/v1/request-volunteers/wcag')
  }

})

router.post('/accessibility-user', function (req, res) {

  const accessibilityUser = req.session.data['accessibility-user']

  if (accessibilityUser === 'Yes') {
    res.redirect('/v1/sign-up/which-assistive-technologies')
  } else {
    res.redirect('/v1/sign-up/about-you')
  }
})

// GET SPRINT NAME - useful for relative templates
router.use('/', (req, res, next) => {
  res.locals.prevURL = req.get('Referrer'); // previous page
  res.locals.currentURL = req.originalUrl; // current page
  console.log('previous page: ' + res.locals.prevURL);
  console.log('current page: ' + res.locals.currentURL);
  next();
});

module.exports = router
