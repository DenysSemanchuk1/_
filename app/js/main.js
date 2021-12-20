new Splide(".splide", {
  classes: {
    pagination: "splide__pagination your-class-pagination",
    page: "splide__pagination__page your-class-page",
  },
  perPage: 3,
}).mount();
new Splide(".tv__slider", {
  type: "loop",
  focus: "center",
  perPage: 3,
  gap: "15rem",
}).mount();
$(".reviews__first-slider").slick({
  infinite: true,
  adaptiveHeight: true,
  variableWidth: true,
  asNavFor: ".reviews__second-slider",
  arrows: false,
  focusOnSelect: true,
  centerMode: true,
  centerPadding: "50px",
  slidesToShow: 3,
});
$(".reviews__second-slider").slick({
  infinite: true,
  slidesToShow: 1,
  asNavFor: ".reviews__first-slider",
  focusOnSelect: true,
  dots: true,
  nextArrow:
    '<button type="button" class="slick-next"><i><img src="images/next-icon.svg" alt=""></i></button>',
  prevArrow:
    '<button type="button" class="slick-prev"><i><img src="images/prev-icon.png" alt=""></i></button>',
});
$(".faq__item-title").on("click", function () {
  $(this).toggleClass("active");
});
