(function() {

  $(document).ready(function() {
    var get_rand, handle_success, tmpl;
    tmpl = "Welcome to my <%= term11 %> <%= term12 %>. Please enjoy my <%= term21 %> <%= term22 %>.";
    get_rand = function(max, blacklist) {
      var i;
      i = Math.floor(Math.random() * max);
      if (!(blacklist != null)) return i;
      if (i !== blacklist) return i;
      return get_rand(max, blacklist);
    };
    handle_success = function(data) {
      var i11, i12, i21, i22, out, target, terms;
      out = _.template(tmpl);
      target = $('#welcome-message');
      i11 = get_rand(data.terms.term1.length);
      i21 = get_rand(data.terms.term1.length, i11);
      i12 = get_rand(data.terms.term2.length);
      i22 = get_rand(data.terms.term2.length, i12);
      terms = {
        "term11": data.terms.term1[i11],
        "term12": data.terms.term2[i12],
        "term21": data.terms.term1[i21],
        "term22": data.terms.term2[i22]
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
