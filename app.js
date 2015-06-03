var Scrape = Scrape || {};

$(document).ready(function() {
  // $('body').addClass('hidden');
  // $('body').fadeIn(1200).removeClass('hidden');
$('jumbotron').addClass('fade-in');
  $('button.form-control').on('click', function() {
    console.log('clicked login');
    var username = $('#uLogin').val();
    var password = $('#uPassword').val();
    $.ajax({
        url: 'localhost:9000/login',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({
          credentials: {
            email: $('#uLogin').val(),
            password: $('#uPassword').val()
          }
        }),
      })
      .done(function(data, textStatus) {
        console.log(textStatus);
        console.log(data);
        console.log('Success');
      })
      .fail(function(jqxhr, textStatus, errorThrown) {
        console.log("error");
        console.log(textStatus);
      })
      .always(function() {
        console.log("complete");
      });

  });




  // $( '#product-search' ).keypress(function(event) {
  //   var checkStr = event.keyCode;
  //   console.log(checkStr);
  //   $.ajax({
  //     url: 'http://localhost:9000/html-elements.json',
  //     type: 'GET',
  //     dataType: 'json',
  //   })
  //   .done(function(response) {
  //     console.log("success");
  //     // Set shit to null
  //     $('#json-datalist').html('');

  //     // Go through the json received and render the ones that match.
  //     response.forEach(function (element) {
  //       element = element.toString();
  //       // if (element.match(/checkStr)) {}
  //       var $newOption = '<option value="' + element + '"></option';

  //       $('#json-datalist').append($newOption);
  //     });
  //   })
  //   .fail(function() {
  //     console.log("error");
  //   })
  //   .always(function() {
  //     console.log("complete");
  //   });

  // });


});
