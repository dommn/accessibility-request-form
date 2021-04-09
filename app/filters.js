module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  filters.toMonth = function(x){
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (x > 0){
      return months[x - 1]; // returns date as per month
    }
    else {
      return x ;
    }
  }

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
