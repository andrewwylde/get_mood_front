var Scrape = Scrape || {};

Scrape.New = (function() {

  var password, password_confirmation, email, firstName, lastName, token;


//NEEDS WORK
  function _hideLogin() {
    $('#loginModal').modal('hide');
    $('#login-button').hide();
    $('#profile-dropdown').removeClass('hidden');
  }


//NEEDS WORK
  function _success() {
    $('#login-success').modal('show');
    _hideLogin();
    _clearPass();
  }

//NEEDS WORK
  function _failure(failText) { //If login fails, hide modal and highlight erros
    $('.alert-danger').html('<strong>'+failText+'</strong><br><p>Please check fields and try again</p>');
    $('#login-fail').modal('show');
  }


  /*CLEAR PASSWORD FIELDS AFTER SUCCESS*/
  function _clearPass () {
    $('#uEmail').val('');
    $('#uEmailNew').val('');
    $('#uPassword').val('');
    $('#uPasswordNew').val('');
    $('#firstName').val('');
    $('#lastName').val('');
    $('#uPasswordConfirmation').val('');
  }
  /*END CLEAR PASSWORD FIELDS AFTER SUCCESS*/


/*CREDENTIALS GENERATOR*/
  function _generateCredentials(userType) {
    if (userType == "new") {
      return JSON.stringify({
        credentials: {
          email: $('#uEmailNew').val(),
          password: $('#uPasswordNew').val(),
          first_name: $('#firstName').val(),
          last_name: $('#lastName').val(),
          password_confirmation: $('#uPasswordConfirmation').val()
        }
      });
    } else {
      return JSON.stringify({
        credentials: {
          email: $('#uEmail').val(),
          password: $('#uPassword').val()
        }
      });
    }

  }
/*END CREDENTIALS GENERATOR*/

/*REGISTER FUNCTION*/
  function _register() {
    params = _generateCredentials("new");
    $.ajax({
        url: 'http://localhost:9000/register',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: params
      })
      .done(function() {
        console.log("success");
        _success();
      })
      .fail(function() {
        _failure("Registration Error");
        console.log("error");
      });
  }
/*END REGISTER FUNCTION*/

/*LOGIN FUNCTION*/
  function _login() {
    params = _generateCredentials("old");
    $.ajax({
        url: 'http://localhost:9000/login',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: params
      })
      .done(function(data, textStatus) {
        console.log('Success');
        token = data.token;
        _success();
        flavors = data.flavors;
        drinks = data.drinks;
      })
      .fail(function(jqxhr, textStatus, errorThrown) {
        console.log("error");
        _failure("Login Error");
      });
  }
/*END LOGIN FUNCTION*/


/*NORMALIZER*/
  // function normalize (textToNormalize) {
  //   textToNormalize.replace(//);
  // }


/*AUTOPOPULATOR*/
  function _autoPop(checkStr, $listEl, targetType) {
    // console.log(checkStr, $listEl, targetType);
    $listEl.html('');

    if (targetType == "flavor") {
      // console.log('it is a flavor!');
      for (var i = 0; i < flavors.length; i++) {
        var flavName = flavors[i].name;

        if (flavName.search(checkStr) != -1) {
          var $newOption = '<option value="' + flavName + '"></option';
          $listEl.append($newOption);

        }
      }
    } else {
            // console.log('it is a flavor!');
      for (var j = 0; j < drinks.length; j++) {
        var brewName = drinks[j].roast_name;

        if (brewName.search(checkStr) != -1) {
          var $newOption1 = '<option value="' + brewName + '"></option';
          $listEl.append($newOption1);

        }
      }
    }

  }

  /*END AUTOPOPULATOR*/

/*RETURN FUNCTIONS*/
  return {
    login: _login,
    register: _register,
    autoPop: _autoPop
  };
/*END RETURN FUNCTIONS*/

})(); //IIFE END & INVOCATION
