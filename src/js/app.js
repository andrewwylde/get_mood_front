var Scrape = Scrape || {};

/*VAR DECLARATION*/
var scrape, flavors, drinks, loggedIn;
scrape = Scrape.New;
/*END VAR DECLARATION*/

$(document).ready(function() {
  $('#icecream-search').hide();
  $('#coffee-search').hide();
  $('#pairings-div').hide();

  /*OPEN SESAME*/
  $('jumbotron').show();
  /*END OPEN SESAME*/

  /*TOGGLE SEARCH*/
  $('.lg-logo').on('click',function () {

    if (this.id == "#moo-pic"){
      $('#icecream-search').addClass('animated fadeInDown');
      $('#icecream-search').toggle();
      $('#coffee-search').hide();

    } else {
      $('#coffee-search').addClass('animated fadeInDown');
      $('#coffee-search').toggle();
      $('#icecream-search').hide();
    }
  });
  /*END TOGGLE SEARCH*/

/*REGISTER/LOGIN RETURN PRESS HANDLER*/
  $('.last-box').keydown(function(event) {
    if (event.keyCode === 13) {
      this.id == "uPassword" ? scrape.login() : scrape.register();
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
  $('.search input').keyup(function(event) {
    if (loggedIn) {
      var keyCodeEscapes = [37,38,39,40];
      if (keyCodeEscapes.indexOf(event.keyCode) == -1){
        if (this.list.id == "icecream-datalist") {
          console.log('scraping for ice');
          scrape.autoPop(this.value,$('#icecream-datalist'), "flavor");
        } else {
          scrape.autoPop(this.value,$('#coffee-datalist'), "coffee");
        }
      }
    }

  });
/*END SEARCH TYPING HANDLER*/

/*GET PAIRINGS*/

$('.mood').on('click', function(event) {
  event.preventDefault();
  if (loggedIn) {
    if (this.parentElement.id=="icecream-search") {
      scrape.getPairings($(this).prev().val(),"drink");
    } else {
      scrape.getPairings($(this).prev().val(),"flavor");
    }
  } else {
    scrape.fail("Need to Log In First!");
  }
});
/*END GET PAIRINGS*/

/* DESTROY */
// $('#destroy-me').on('click', function(event) {
//   console.log('destroid');
//   scrape.destroy();
// });
/* END DESTROY */


}); /*################## END OF $.READY ##################*/
