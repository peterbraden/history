$(function(){
	var parseTime = function(st){
		if ( st.indexOf('-') > 0 ){ //Not contained, or not first
			return parseInt(st.split('-')[0]);
		}
		
		//No dashes, assume int year
		return parseInt(st);
		
	} 


	$.each(history_data.sort(function(a,b){
			return parseTime(a['begins']) - parseTime(b['begins']);
		}), function(x){
			var d = this;
		
		if (this['ends']){
			var right = ((parseTime(d['ends']) - 2010) *0.75); //Math.log(1 - (parseTime(d['ends']) - 2010)) * 100;
			var width = ((parseTime(d['begins']) - 2010) *0.75)- right; //(Math.log(1 - (parseTime(d['begins']) - 2010)) * 100) - right;
			var bgcol = '#fbb';
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
	
});	