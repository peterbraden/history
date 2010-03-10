$(function(){
	var parseTime = function(st){
		if ( st.indexOf('-') > 0 ){ //Not contained, or not first
			return parseInt(st.split('-')[0]);
		}
		
		//No dashes, assume int year
		return parseInt(st);
		
	} 
	var civ_colors = {
		'greece' : '#99f',
		'persia' : '#f99',
		'rome' : '#9f9'
	}

	var makePos = function(i){
		return (i - 2010) * 0.75;
		//Math.log(1 - (parseTime(d['ends']) - 2010)) * 100
	}
	
	$.each(history_data.sort(function(a,b){
			return parseTime(a['begins']) - parseTime(b['begins']);
		}), function(x){
			var d = this;
		
		if (this['ends']){
			var right = makePos(parseTime(d['ends']));
			var width = makePos(parseTime(d['begins'])) - right; 
			var bgcol = civ_colors[d['civilisation']] || '#bbb';
		}else{
			var right = Math.log(1 - (parseTime(d['begins']) - 2010)) * 100;
			var width = '';
			var bgcol = 'transparent';
		};
		var data = $('<p class="dat">' + this['text'] + '</p>').css({
			right: Math.abs(right),
			width: Math.abs(width),
			'background-color':bgcol,
			top: (x%10)*24,
			cursor: (d['detail'] || d['wikipedia']) ? 'pointer' : '',
		}).click(function(){
			if (d['detail']){
				$('#detail').html('<p>' + d['detail'] + '</p>');
			} 
			else if (d['wikipedia']){
				$('#detail').html('<a href="' + d['wikipedia'] + '">' + d['text'] + "(" + d['wikipedia'] + "</a>");
			}	
			else {
				$('#detail').html('');
			}	
		})

		$('#cont').append(data);
			
	});
	
	for (var i = -1000; i<2100; i+=100){
		$('#cont').append(
			$("<p class = 'scale'>" + i + "</p>").css({
				right : Math.abs(makePos(i))
			})
		);
	}
	
});	