var Scrape = Scrape || {};

/*VAR DECLARATION*/
var scrape, flavors, drinks;
scrape = Scrape.New;
/*END VAR DECLARATION*/

$(document).ready(function() {

  /*OPEN SESAME*/
  $('jumbotron').show();
  /*END OPEN SESAME*/

/*REGISTER/LOGIN RETURN PRESS HANDLER*/
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
/*END REGISTER/LOGIN RETURN PRESS HANDLER*/

/*REGISTER/LOGIN CLICK HANDLER*/
  $('button#register').on('click', function() {
    scrape.register();
  });
  $('button#login').on('click', function() {
    scrape.login();
  });
/*END REGISTER/LOGIN CLICK HANDLER*/

  /*SEARCH TYPING HANDLER*/
  $('.search').keyup(function(event) {
    // console.log(event);
    // console.log($(this).val());
    var keyCodeEscapes = [37,38,39,40];
    if (keyCodeEscapes.indexOf(event.keyCode) == -1){
      if (event.delegateTarget.id == "icecream-search") {
        scrape.autoPop($(this).val(),$('#icecream-datalist'), "flavor");
      } else {
        scrape.autoPop($(this).val(),$('#coffee-datalist'), "coffee");
      }
    }
  });
/*END SEARCH TYPING HANDLER*/

}); /*################## END OF $.READY ##################*/
