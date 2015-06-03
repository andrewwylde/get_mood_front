var Scrape = Scrape || {};

Scrape.List = (function() {


  function _getFlavors() {
    $.ajax({
        url: 'http://www.benjerry.com/flavors',
        type: 'GET',
        dataType: 'json',

      })
      .done(function() {
        console.log("success");
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
  }

  return {
    getFlavors: _getFlavors
  };

})();
