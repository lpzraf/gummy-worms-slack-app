$('#btn').click(function(){
	  var url = ""

  var payload= {"text":"Hey! Hey! Hey! It's GUMMY WORM"}

  $.post(url,JSON.stringify(payload), function(data){
      $('#result').text(data);
  })
})
