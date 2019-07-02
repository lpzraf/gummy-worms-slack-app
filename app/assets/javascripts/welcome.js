$('#btn').click(function(){
	  var url = ENV['SLACK_WEBHOOK']

  var payload= {"text":"Hey! Hey! Hey! It's GUMMY WORM"}

  $.post(url,JSON.stringify(payload), function(data){
      $('#result').text(data);
  })
})
