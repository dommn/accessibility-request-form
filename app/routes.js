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
    res.redirect('v1/sign-up/which-assistive-technologies')
  } else {
    res.redirect('v1/sign-up/about-you')
  }
})

router.post('/accessibility-user-v2', function (req, res) {

  const accessibilityUser = req.session.data['accessibility-user']

  if (accessibilityUser === 'Yes') {
    res.redirect('v2/sign-up/which-assistive-technologies')
  } else {
    res.redirect('v2/sign-up/about-you')
  }
})

router.post('/research-type', function (req, res) {

  const research = req.session.data['research-type']
  const usabilityTesting = research.includes("Usability testing")
  const isResearchArray = Array.isArray(research)

  if (usabilityTesting) {
    if (!isResearchArray) {
      res.redirect('v2/request-volunteers/how-many-users') // if only usability testing selected
    } else {
      res.redirect('v2/request-volunteers/reasons-why') // if multiple selected
    }
  } else {
    res.redirect('v2/request-volunteers/reasons-why') // if usability testing not selected
  }
})

router.post('/assistive-technologies', function (req, res) {

  const research = req.session.data['research-type']
  const usabilityTesting = research.includes("Usability testing")

  if (usabilityTesting) {
    res.redirect('v2/request-volunteers/which-assistive-technologies')
  } else {
    res.redirect('v2/request-volunteers/when')
  }
})

router.post('/monday-to-friday', function (req, res) {

  const fullTime = req.session.data['monday-to-friday']

  if (fullTime === 'Yes') {
    res.redirect('v2/sign-up/notice')
  } else {
    res.redirect('v2/sign-up/which-days')
  }
})

router.post('/accessibility-needs', function (req, res) {

  const accessibilityNeeds = req.session.data['accessibility-needs']

  if (accessibilityNeeds.includes("I’m neurodiverse") || accessibilityNeeds.includes("I have a hidden disability")) {
    res.redirect('v2/sign-up/more-about-you')
  } else {
    res.redirect('v2/sign-up/contact-details')
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
