var Scrape = Scrape || {};


var scrape, username, password, flavors;
scrape = Scrape.New;

$(document).ready(function() {


  /*This area will hold the option-adder*/
  // $('#product-search').keypress(function(event) {
  //   var checkStr = event.keyCode;

  //   tempJSON.forEach(function(element) {
  //     if (element.match(/checkStr/)) {
  //       console.log('match found');
  //     }
  //   });

  /*End Product-Search*/

  // $.ajax({
  //     url: 'localhost:9000',
  //     type: 'POST',
  //     dataType: 'json',
  //     headers: {
  //       credentials: {
  //         email: /*PUT SOMETHING HERE*/ null,
  //         password: /*PUT SOMETHING HERE*/ null,
  //       }
  //     }
  //   })
  //   .done(function(data) {
  //     data.forEach(function(element) {
  //       element = element.toString();
  //       tempJSON.push(element.name);
  //     });
  //     console.log("success");
  //   })
  //   .fail(function() {
  //     console.log("error");
  //   })
  //   .always(function() {
  //     console.log("complete");
  //   });


  /*OPEN SESAME*/
  $('jumbotron').show();


  // This is to trigger the login from the enter keypress
  $('#uPassword').keydown(function(event) {
    if (event.keyCode === 13) {
      username = $('#uEmail').val();
      password = $('#uPassword').val();
      scrape.login(username, password);
      flavors = scrape.getRawJson();
    }
  });

/*Login/Register!*/
  $('button#register').on('click', function() {
    scrape.register();
  });
  $('button#login').on('click', function() {
    scrape.login();
  });

}); /*################## END OF $.READY ##################*/


// $('#product-search').keypress(function(event) {
//   var checkStr = event.keyCode;
//   console.log(checkStr);
//   $.ajax({
//       url: 'http://localhost:9000/html-elements.json',
//       type: 'GET',
//       dataType: 'json',
//       headers: {
//         Authorization: 'Token token=' + $("#token").val()
//       }
//     })
//     .done(function(response) {
//       console.log("success");
//       // Set shit to null
//       $('#json-datalist').html('');

//       // Go through the json received and render the ones that match.
//       response.forEach(function(element) {
//         element = element.toString();
//         if (element.match(/checkStr)) {}
//         var $newOption = '<option value="' + element + '"></option';

//         $('#json-datalist').append($newOption);
//       });
//     })
//     .fail(function() {
//       console.log("error");
//     })
//     .always(function() {
//       console.log("complete");
//     });

// });
