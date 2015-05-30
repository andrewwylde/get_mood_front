function getCheddar () {
  $.ajax({
    url:'http://www.benjerry.com/flavors',
    type: 'GET',
    dataType: 'html',
  })
  .done(function(response) {
    console.log("success");
    console.log(response);
    console.log(response.html());
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
}

