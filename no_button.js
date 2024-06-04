var myFuncCalls = 0;
		$('#no_butt').on('mouseenter',function(e){
			var maxX = $(window).width() - $(this).width();
			var maxY = $(window).height() - $(this).height();
			$(this).css({
				'left':getRandomInt(0, maxX),
				'top':getRandomInt(0, maxY)
			});

			myFuncCalls++;

		});
		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
