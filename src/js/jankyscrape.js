var Scrape = Scrape || {};

Scrape.New = (function() {

  function _getFlavors(token) {
    $.ajax({
        url: 'http://localhost:9000/flavors',
        type: 'GET',
        dataType: 'json',
        headers: { Authorization: 'Token token=' + token }
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

  function _success(){
    $('#loginModal').modal('hide');
    $('div.bs-example-modal-sm').modal('show');
  }

  function _failure(){
    $('#login-fail').modal('show');
  }

  function _login(username, password) {
    $.ajax({
        url: 'http://localhost:9000/login',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({
          credentials: {
            email: $('#uLogin').val(),
            password: $('#uPassword').val()
          }
        })
      })
      .done(function(data, textStatus) {
        console.log(data);
        console.log('Success');
        _success();
      })
      .fail(function(jqxhr, textStatus, errorThrown) {
        console.log("error");
        console.log(textStatus);
      });
  }

  /*This should take an Ajax Request's JSON and parse it into an array so that we can access it a bit more easily*/
  function _getRawJson(jsonFile) {
    return _getFlavors;
  }

  return {
    getRawJson: _getRawJson,
    login: _login
  };

})();
