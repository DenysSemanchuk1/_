$(".faq__item-title").on("click", function () {
  $(this).toggleClass("active");
});

$(".hamburger").on("click", function () {
  $(".menu").toggleClass("active");
});
new Splide(".splide", {
  classes: {
    pagination: "splide__pagination your-class-pagination",
    page: "splide__pagination__page your-class-page",
  },
  perPage: 3,
  perMove: 1,
  breakpoints: {
    1200: {
      perPage: 2,
      perMove: 1,
    },
    993: {
      perPage: 3,
      perMove: 1,
    },
    770: {
      perPage: 2,
      perMove: 1,
    },
    601: {
      perPage: 1,
      perMove: 1,
    },
  },
}).mount();
new Splide(".tv__slider", {
  type: "loop",
  focus: "center",
  perPage: 3,
  gap: "15rem",
  breakpoints: {
    1401: {
      perPage: 2,
      perMove: 1,
    },
    993: {
      perPage: 1,
      perMove: 1,
    },
  },
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
  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
      },
    },
  ],
});
$("select, .form-inner-left-checkbox").styler();
