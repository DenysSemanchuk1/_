new Splide( '.splide', {
  classes: {
		pagination: 'splide__pagination your-class-pagination',
		page      : 'splide__pagination__page your-class-page',
    
  },
  perPage: 3,
  
} ).mount();
new Splide('.tv__slider', {
  type : 'loop',
  focus: 'center',
  perPage: 3,
  gap: '15rem',
}).mount();
$('.reviews__first-slider').slick({
  infinite: true,
  adaptiveHeight: true,
  variableWidth: true,
  asNavFor: '.reviews__second-slider',
  arrows: false,
  focusOnSelect: true,
  centerMode: true,
  centerPadding: "50px",
});
$('.reviews__second-slider').slick({
  infinite: true,
  asNavFor: '.reviews__first-slider',
  centerMode: true,
  focusOnSelect: true,
});