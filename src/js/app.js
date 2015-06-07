var Scrape = Scrape || {};

/*VAR DECLARATION*/
var scrape, flavors, drinks, loggedIn;
scrape = Scrape.New;
/*END VAR DECLARATION*/

$(document).ready(function() {
  $('#icecream-search').hide();
  $('#coffee-search').hide();
  /*OPEN SESAME*/
  $('jumbotron').show();
  /*END OPEN SESAME*/

  /*TOGGLE SEARCH*/
  $('.lg-logo').on('click',function () {

    if (this.id == "#moo-pic"){
      $('#icecream-search').toggle();
      $('#coffee-search').hide();

    } else {
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

}); /*################## END OF $.READY ##################*/
