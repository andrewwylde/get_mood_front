var Scrape = Scrape || {};

Scrape.New = (function() {

  var password, password_confirmation, email, firstName, lastName, token;

  function _hideLogin() {
    $('#loginModal').modal('hide');
  }

  function _success() {
    $('#login-success').modal('show');
    _hideLogin();
  }

  function _failure() {
    _hideLogin();
    $('#login-fail').modal('show');
  }

  function _getForm(userType) {
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

  function _register() {
    params = _getForm("new");
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
        console.log("error");
      });
  }

  function _login() {
    params = _getForm("old");
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
      });
  }

  /*This should take an Ajax Request's JSON and parse it into an array so that we can access it a bit more easily*/

  function _autoPop(checkStr, $listEl, targetType) {
    console.log(checkStr, $listEl, targetType);
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

  return {
    login: _login,
    register: _register,
    autoPop: _autoPop
  };

})();
