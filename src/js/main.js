$(document).ready(function(){
			$('.main-menu__link').click(function(){
				event.preventDefault();
				$('.main-menu__list').toggleClass('main-menu--active');
			});

			$('.catalog__card--abrau').click(function(event){
				event.preventDefault();
				$('.modal').removeClass('visually-hidden');
				$('.overlay').show();
				$('.slider-top').slick({
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  arrows: false,
				  fade: true,
				  asNavFor: '.slider-nav',
				  responsive: [
				    {
				      breakpoint: 768,
				      settings: {
				        arrows: true,
				        centerMode: true,
				        slidesToShow: 1
				      }
				    }
				  ]
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
				event.preventDefault();
				$('.modal').addClass('visually-hidden');
				$('.overlay').hide();
			});
			
		});