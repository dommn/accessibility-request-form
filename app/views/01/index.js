const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line

// Notification message routing depending on sort code that's entered

router.post('/find-account', function (req, res) {

  let sortCode = req.session.data['sort-code']

  if (sortCode === '112233') {
    res.redirect('notifications/account-number-match-error')
  }

  if (sortCode === '223344') {
    res.redirect('notifications/branch-due-to-close-error')
  }

  if (sortCode === '111111') {
    res.redirect('notifications/success')
  }

  if (sortCode === '222222') {
    res.redirect('notifications/success-no-dd')
  }

  if (sortCode === '333333') {
    res.redirect('notifications/success-no-fp')
  }

  if (sortCode === '334455') {
    res.redirect('input-validation/incorrect-roll-number')
  }

  if (sortCode === '4455667') {
    res.redirect('input-validation/sort-code-length')
  }

  if (sortCode === '556677') {
    res.redirect('input-validation/account-number-length')
  }

  if (sortCode === '998877') {
    res.redirect('find-an-account-roll-validation')
  }

})

router.post('/find-account-02-roll-number-fraud', function (req, res) {

  let rollNumber = req.session.data['roll-number2']

  if (rollNumber === 'AK12345678') {
    res.redirect('notifications/roll-number-success')
  }

})


module.exports = router
