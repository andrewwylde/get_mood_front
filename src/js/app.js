var Scrape = Scrape || {};


var scrape, username, password, flavors, drinks;
scrape = Scrape.New;

// debugger;

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

  /*OPEN SESAME*/
  $('jumbotron').show();


  // This is to trigger the login from the enter keypress
  $('#uPassword').keydown(function(event) {
    if (event.keyCode === 13) {
      scrape.login();
    }
  });
  $('#uPasswordNew').keydown(function(event) {
    if (event.keyCode === 13) {
      scrape.register();
    }
  });

  /*Login/Register!*/
  $('button#register').on('click', function() {
    scrape.register();
  });
  $('button#login').on('click', function() {
    scrape.login();
  });

  /*Searchtime*/
  $('.search').keyup(function(event) {
    // console.log(event);
    // console.log($(this).val());
    if (event.delegateTarget.id == "icecream-search") {
      scrape.autoPop($(this).val(),$('#icecream-datalist'), "flavor");
    } else {
      scrape.autoPop($(this).val(),$('#coffee-datalist'), "coffee");
    }
    // console.log(event.delegateTarget.id)
    // scrape.autoPop($(this).val(),event.delegateTarget.id);
    // var checkStr = $('#icecream-search').val();
    // // console.log(checkStr);
    // if (flavors) {
    //   scrape.autoPop(checkStr,);

    // }
  });

}); /*################## END OF $.READY ##################*/
