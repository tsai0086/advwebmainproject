$(document).ready(function() {

var audio1 = document.createElement('audio');

		audio1.setAttribute ('src', 'sounds/glory2hk.mp3');

		$('.shutup').click(function() {
		audio1.play();
	})

	const cursor = document.querySelector('.cursor');

	document.addEventListener('mousemove', e => {
		cursor.setAttribute("style", "top: " +(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
	})

	$(document).keydown(function(e) {
		switch(e.which) {
			case 53:
				$(".fake_home").css("display","none");
			break;

			case 27:
				$(".fake_home").css("display","block");
			break;

			default: return;
		}

	})





});