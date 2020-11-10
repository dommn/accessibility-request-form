const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/participants', function (req, res) {

  let inputName1 = req.session.data['participants']
  let inputName2 = req.session.data['participants'] 
  if (inputName1 === 'usability' ) {
    res.redirect('/01/wcag')
  } else if (inputName2 === 'other') {
    res.redirect('/01/no-wcag-route/what-phase')
  } else {
    res.redirect('/01/wcag')
  }

})


module.exports = router
