$(document).ready(function(){
			$('.main-menu__link').click(function(){
				$('.main-menu__list').toggleClass('main-menu--active');
			});

			$('.catalog__card--abrau').click(function(event){
				event.preventDefault();
				$('.modal').removeClass('visually-hidden');
				$('.slider-top').slick({
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  arrows: false,
				  fade: true,
				  asNavFor: '.slider-nav'
				});
				$('.slider-nav').slick({
				  slidesToShow: 4,
				  slidesToScroll: 1,
				  asNavFor: '.slider-top',
				  arrows: true,
				  centerMode: true,
				  focusOnSelect: true
				});
			});

			$('.modal-close').click(function(){
				$('.modal').addClass('visually-hidden');
			});
			
		});