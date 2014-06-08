(function($){


	var o = {
		message : 'Glissez les formes identiques'
	}




	$.fn.drop = function (oo){
		if(oo) $.extend(o,oo);
		this.each(function(){
			$('<span>').addClass('indications').append(o.message).appendTo(this);
			$(this).bind({
				dragenter : function(e){
					e.preventDefault();
					console.log("ENTER");

				
				},
				dragover : function(e){
					e.preventDefault();
					$(this).addClass('hover');
					
					
				},
				dragleave : function(e){
					e.preventDefault();
					$(this).removeClass('hover');
					console.log('DRAGLEAVE');
					
				},
				drop : function(e){
					e.preventDefault();
					$(this).removeClass('hover');
					console.log('DROP');
					
				}
			});
			
		});


	}



}) (jQuery);