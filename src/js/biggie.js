var Scrape = Scrape || {};

Scrape.New = (function() {

  var password, password_confirmation, email, firstName, lastName, token;

  function _getFlavors() {
    $.ajax({
        url: 'http://localhost:9000/flavor',
        type: 'GET',
        dataType: 'json',
        headers: {
          Authorization: 'Token token=' + token
        }
      })
      .done(function(data, textStatus) {
        console.log("success");
        console.log(textStatus);
        return data.flavor;
      })
      .fail(function() {
        console.log("error");
      });
  }

  function _success() {
    $('#loginModal').modal('hide');
    $('div.bs-example-modal-sm').modal('show');
  }

  function _failure() {
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
        // console.log(data);
        console.log('Success');
        _success();
      })
      .fail(function(jqxhr, textStatus, errorThrown) {
        console.log("error");
        // console.log(textStatus);
      });
  }

  /*This should take an Ajax Request's JSON and parse it into an array so that we can access it a bit more easily*/
  function _getRawJson(jsonFile) {
    return _getFlavors();
  }

  return {
    getRawJson: _getRawJson,
    login: _login,
    register: _register
  };

})();
