$(function() {

	gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

	let containerWidth = $('.gallery-holder').width();
	let academySliderWidth = $('.js-row-academy').width();

	let Tl0 = gsap.timeline({
		scrollTrigger: {
			trigger: '.academy-space',
			start: 'top 20%',
			end: 'bottom 80%',
			scrub: 0.5,
			toggleActions: 'restart none reverse none'
		},
		ease: "none"
	});

	Tl0.to('.js-row-academy', {
			duration: 2,
			x: -(academySliderWidth - containerWidth)
		});

	let partnersSliderWidth = $('.js-row-partners').width();

	let Tl1 = gsap.timeline({
		scrollTrigger: {
			trigger: '.partners',
			start: 'top 30%',
			end: 'bottom 80%',
			scrub: 0.5,
			toggleActions: 'restart none reverse none'
		},
		ease: "none"
	});

	Tl1.to('.js-row-partners', {
			duration: 2,
			x: -(partnersSliderWidth - containerWidth)
		});

	// schedule
	$('.calendar-item__opener').on('click', function(){
		$(this).closest('.calendar-item').addClass('active');
	});

	$('.calendar-item__popup .js-popup-close').on('click', function(e){
		e.preventDefault();

		$(this).closest('.calendar-item').removeClass('active');
	});

	$('.calendar-item__popup .js-next').on('click', function(e){
		e.preventDefault();

		$(this).closest('.calendar-item').next().addClass('active');

		setTimeout(() => {
			$(this).closest('.calendar-item').removeClass('active');
		},150);
	});

	// header scroll
	$(window).scroll(function(event) {
		if($(window).scrollTop() > 0) {
			$('.header').addClass('fixed');
		} else {
			$('.header').removeClass('fixed');
		}
	});

	//mobile nav
	$('.nav-opener').on('click', function(e){
		e.preventDefault();

		$('.header').toggleClass('nav-active');
	});

	//preview
	//mockup preview
	$('.js-mockup-preview').fancybox({
		infobar: false,
		toolbar: true,
		baseClass: "mockup-preview",
		buttons: [],
		smallBtn: true,
		arrows: false,
		transitionEffect: "slide",
		afterLoad : function(instance, current) {
			current.$content.append(`
					<a href="#" class="btn-close" data-fancybox-close></a>
					<div class="mockup-preview__image">
						<img src="${current.src}" alt="">
					</div>
					<div class="mockup-preview__header">
						<button data-fancybox-prev class="prev"></button>
						<span class="caption">${current.opts.caption}</span>
						<button data-fancybox-next class="next"></button>
					</div>
				`);
		}
	});
});




