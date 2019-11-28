$(function(){
  $('#u-api-meteo').on('submit', function(event){
  event.preventDefault();
  console.log ("kdk")
	let city = $('#u-ville').val();
	$.getJSON('https://www.prevision-meteo.ch/services/json/'+city)
	.done(function(data){
  console.log (data)
			$('#u-api-city').text(data.city_info.name);
      $('#u-api-temp').text(data.current_condition.tmp);
      $('#u-api-date').text(data.current_condition.date);
      $('#u-api-condition').text(data.current_condition.condition);
      $('#u-api-humidity').text(data.current_condition.humidity);
      $('#u-api-pressure').text(data.current_condition.pressure);
      $('#u-api-wind').text(data.current_condition.wnd_spd);
		}).fail(function(){console.log("error")});

    });
    });
