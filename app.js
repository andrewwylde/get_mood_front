$(document).ready(function() {


$('#moo').click(function(event) {
  getCheddar();
});




  $( '#product-search' ).keypress(function(event) {
    var checkStr = event.keyCode;
    console.log(checkStr);
    $.ajax({
      url: 'http://localhost:9000/html-elements.json',
      type: 'GET',
      dataType: 'json',
    })
    .done(function(response) {
      console.log("success");
      // Set shit to null
      $('#json-datalist').html('');

      // Go through the json received and render the ones that match.
      response.forEach(function (element) {
        element = element.toString();
        // if (element.match(/checkStr)) {}
        var $newOption = '<option value="' + element + '"></option';

        $('#json-datalist').append($newOption);
      });
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });

  });


});
