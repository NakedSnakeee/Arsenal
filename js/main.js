$(function  () {
	var menuBtn = $('.top-nav_btn');
	var menu = $('.top-nav_mobile_menu');
	menuBtn.on('click', function(event) {
		menu.toggleClass('top-nav_mobile_menu__active');
	});


	function scrollTo(element){
		window.scroll({
			left: 0,
			top: element.offsetTop,
			behavior: 'smooth'
		});
	}

	var up = document.querySelector('.up');
	var top = document.querySelector('#top');

	up.addEventListener('click', () => {
		scrollTo(top);
	})


	$('.question_block-expert-3').click(function() {
		$(this).addClass('block-active');
		$('.question_block-expert-2').removeClass('block-active');
		$('.question_block-expert-1').removeClass('block-active');

		$('#block-contact-name').text('Евгенья Волкова');
		$('#block-contact-phone').text('+7 (965) 143-96-43');
	});

	$('.question_block-expert-2').click(function() {
		$('.question_block-expert-3').removeClass('block-active');
		$(this).addClass('block-active');
		$('.question_block-expert-1').removeClass('block-active');

		$('#block-contact-name').text('Елена Тихонова');
		$('#block-contact-phone').text('+7 (982) 645-11-23');
	});

	$('.question_block-expert-1').click(function() {
		$('.question_block-expert-3').removeClass('block-active');
		$('.question_block-expert-2').removeClass('block-active');
		$(this).addClass('block-active');

		$('#block-contact-name').text('Никита Николенко');
		$('#block-contact-phone').text('+7 (953) 892-83-56');
	});

	$('.product_cards').slick({
		arrows: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 3,
		prevArrow: "<img src='img/slide_left.png' class='prev' alt='1'>",
		nextArrow: "<img src='img/slide_right.png' class='next' alt='2'>",
		responsive: [
		{
		 	breakpoint: 1200,
		 	settings: {
		 		slidesToShow: 3,
		 		slidesToScroll: 2
		 	}
		 },
		 {
		 	breakpoint: 1024,
		 	settings: {
		 		slidesToShow: 2.5,
		 		slidesToScroll: 1
		 	}
		 },
		 {
		 	breakpoint: 768,
		 	settings: {
		 		slidesToShow: 2.1,
		 		slidesToScroll: 1
		 	}
		 },
		 {
		 	breakpoint: 610,
		 	settings: {
		 		slidesToShow: 1.4,
		 		slidesToScroll: 1
		 	}
		 },
		 {
		 	breakpoint: 300,
		 	settings: {
		 		slidesToShow: 1.1,
		 		slidesToScroll: 1
		 	}
		 }]
	});

	/*Parallax effect*/
	function parallax (event) {
		 this.querySelectorAll('.layer').forEach(layer => {
		 	let speed = layer.getAttribute('data-speed');

		 	layer.style.transform = `translateX(${event.clientX*speed/1000}px)`
		 });
	}

	document.addEventListener('mousemove', parallax)
})