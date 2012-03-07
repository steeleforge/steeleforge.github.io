$(document).ready () ->
  tmpl = "Welcome to my <%= term11 %> <%= term12 %>. Please enjoy my <%= term21 %> <%= term22 %>.";
  
  get_rand = (max,blacklist) ->
    i = Math.floor(Math.random()*max)
    return i if !blacklist?
    return i if i != blacklist
    get_rand max, blacklist
      
  handle_success = (data) ->
    out = _.template(tmpl)
    target = $('#welcome-message')
    i11 = get_rand data.terms.term1.length
    i21 = get_rand data.terms.term1.length, i11
    i12 = get_rand data.terms.term2.length
    i22 = get_rand data.terms.term2.length, i12
    terms = {
      "term11": data.terms.term1[i11]
      "term12": data.terms.term2[i12]
      "term21": data.terms.term1[i21]
      "term22": data.terms.term2[i22]
    }
    target.html out terms
    
  $.ajax {
    url:"/assets/static/index/terms.json"
    dataType: "json"
    success: (data)->
      handle_success(data)
    }
