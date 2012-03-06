$(document).ready () ->
  tmpl = "Welcome to my <%= term11 %> <%= term12 %>. Please enjoy my <%= term21 %> <%= term22 %>.";
  
  get_rand = (arr) ->
    index = Math.floor(Math.random()*arr.length)
    if arr and index < arr.length
      arr[index]
  
  handle_success = (data) ->
    out = _.template(tmpl)
    target = $('#welcome-message')
    terms = {
      "term11": get_rand data.terms.term1
      "term12": get_rand data.terms.term2
      "term21": get_rand data.terms.term1
      "term22": get_rand data.terms.term2
    }
    target.html out terms
    
  $.ajax {
    url:"/assets/static/index/terms.json"
    dataType: "json"
    success: (data)->
      handle_success(data)
    }
