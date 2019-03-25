$(() => {

	$('.js-smart-photo').SmartPhoto();

	// slider block

	const $slider = $('.js-slider');

	$slider.each((idx, el) => {
		const $el = $(el);
		const $sliderList = $el.find('.js-slider__list');

		$sliderList.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			arrows: true,
			dots: true,
			appendDots: $el.find('.js-slider__switcher'),
			customPaging: () => $('<a class="slider__switcher_item" href="javascript:void(0);"></a>'),
			prevArrow: $el.find('.js-slider__left'),
			nextArrow: $el.find('.js-slider__right'),
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		});
	});

	// end slider block


	// menu block

	const MENU = {
		$menu: $('.js-menu'),

		init() {
			$('.js-menu__show').on('click', () => {
				this.$menu.addClass('menu-show');
			});

			$('.js-menu__close').on('click', () => {
				this.$menu.removeClass('menu-show');
			});
		},
	};

	MENU.init();

	// end menu block


	// menu card

	const $card = $('.js-card');

	$card.each((idx, el) => {
		const $el = $(el);

		$el.find('.js-card__state').on('click', () => {
			$el.toggleClass('card-show');
			$el.find('.js-card__content').slideToggle();

			const event = new Event('cardToggle');
			$el[0].dispatchEvent(event);
		});
	});

	// end menu card


	// line block

	const $line = $('.js-line');

	$line.each((idx, el) => {
		const $el = $(el);
		const $lineList = $el.find('.js-line__list');

		$lineList.slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			// autoplay: true,
			// autoplaySpeed: 5000,
			arrows: true,
			dots: false,
			prevArrow: $el.find('.js-line__arrow-left'),
			nextArrow: $el.find('.js-line__arrow-right'),
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		});
	});

	// end line block


	// subnav fixed block

	const SUBNAV = {
		subnav: $('.js-subnav-fixed'),
		subnavHeight: 0,
		anchor: $('.js-subnav-anchor'),
		anchorTop: 0,
		anchorBottom: 0,
		generalOffset: 0,
		customGap: 90,

		checkSubnav() {
			const top = window.pageYOffset || document.documentElement.scrollTop;

			if (
				((SUBNAV.anchorTop - top) < SUBNAV.customGap) &&
				((top + SUBNAV.subnavHeight) < SUBNAV.anchorBottom)
			) {
				SUBNAV.subnav.addClass('subnav-fixed');
				SUBNAV.subnav.css('top', SUBNAV.customGap);
			}

			if ((top + SUBNAV.subnavHeight + SUBNAV.customGap) > SUBNAV.anchorBottom) {
				SUBNAV.subnav.removeClass('subnav-fixed');
				SUBNAV.subnav.css('top', (SUBNAV.anchorBottom - SUBNAV.subnavHeight - SUBNAV.generalOffset));
			}

			if ((SUBNAV.anchorTop - top) > SUBNAV.customGap) {
				SUBNAV.subnav.removeClass('subnav-fixed');
				SUBNAV.subnav.css('top', 'auto');
			}
		},

		init() {
			if (window.innerWidth <= 960) {
				return;
			}

			if (!this.anchor.length) {
				return;
			}

			this.anchorTop = this.anchor.offset().top;
			this.anchorBottom = this.anchorTop + this.anchor.height();
			this.subnavHeight = this.subnav.height();

			const top = window.pageYOffset || document.documentElement.scrollTop;
			this.generalOffset = this.anchorTop;
			this.checkSubnav();
			this.subnav.fadeIn();

			window.addEventListener('scroll', this.checkSubnav);
		}
	};

	SUBNAV.init();

	// end subnav fixed block


	// header fixed block

	const HEADER = {
		header: $('.js-header'),
		generalHeight: 0,

		checkHeader() {
			const top = window.pageYOffset || document.documentElement.scrollTop;

			if (top > HEADER.generalHeight) {
				HEADER.header.addClass('header-fixed-show');
			} else {
				HEADER.header.removeClass('header-fixed-show');
			}
		},

		init() {
			if (window.innerWidth <= 960) {
				return;
			}

			this.generalHeight = window.innerHeight;
			window.addEventListener('scroll', this.checkHeader);
		}
	};

	HEADER.init();

	// end header fixed block


	// gallery block

	$('.js-gallery').each((idx, el) => {
		const $el = $(el);
		const $switcher = $el.next('.js-gallery__switcher');

		$el.on('init reInit afterChange', (event, slick, currentSlide) => {
			const i = (currentSlide || 0) + 1;
			$switcher.find('span').text(`${i} из ${slick.slideCount}`);
		});

		$el.slick({
			adaptiveHeight: true,
			arrows: true,
			prevArrow: $switcher.find('.js-gallery__arrow-left'),
			nextArrow: $switcher.find('.js-gallery__arrow-right'),
		});
	});

	// end gallery block


	// smooth scroll

	$('a[href*="#"]')
		.click(e => {
			if (location.hostname === e.currentTarget.hostname) {
				let target = $(e.currentTarget.hash);
				target = target.length ? target : $('[id=' + e.currentTarget.hash.slice(1) + ']');

				if (target.length) {
					e.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top - 100
					}, 1000);
				}
			}
		});

	// end smooth scroll
});
