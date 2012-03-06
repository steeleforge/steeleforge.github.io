(function() {

  $(document).ready(function() {
    var get_rand, handle_success, tmpl;
    tmpl = "Welcome to my <%= term11 %> <%= term12 %>. Please enjoy my <%= term21 %> <%= term22 %>.";
    get_rand = function(arr) {
      var index;
      index = Math.floor(Math.random() * arr.length);
      if (arr && index < arr.length) return arr[index];
    };
    handle_success = function(data) {
      var out, target, terms;
      out = _.template(tmpl);
      target = $('#welcome-message');
      terms = {
        "term11": get_rand(data.terms.term1),
        "term12": get_rand(data.terms.term2),
        "term21": get_rand(data.terms.term1),
        "term22": get_rand(data.terms.term2)
      };
      return target.html(out(terms));
    };
    return $.ajax({
      url: "/assets/static/index/terms.json",
      dataType: "json",
      success: function(data) {
        return handle_success(data);
      }
    });
  });

}).call(this);
