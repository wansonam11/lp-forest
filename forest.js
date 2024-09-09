  //   //works slider 
  //   $(function () {
  //     let slider = $(".section-works__slider").slick({
  //         arrows: true,
  //         infinite: true,
  //         loop: true,
  //         prevArrow: '<div class="slide-arrow prev-arrow"></div>',
  //         nextArrow: '<div class="slide-arrow next-arrow"></div>',
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         centerMode: false,
  //         speed: 500,
  //         autoplay: true,
  //         autoplaySpeed: 3000,
  //         variableWidth: true,
  //         centerMode: true,
  //         customPaging: function (slider, i) {
  //             let slideNumber = i.toString().padStart(2, "0");
  //             return $('<div class="section-works__slider__dots__num">').text(slideNumber);
  //         },
  //         dotsClass: "section-works__slider__dots",
  //         dots: true,
  //         responsive: [
  //             {
  //                 breakpoint: 640,
  //                 settings: {
  //                     slidesToShow: 1,
  //                     centerMode: true,
  //                     variableWidth: false,
  //                     centerPadding: "6%",
  //                 },
  //             },
  //         ],
  //     });
  
  //     function setActiveDot(index) {
  //         $(".section-works__slider__dots__num").removeClass("slick-active");
  //         for (let i = 0; i <= index; i++) {
  //             $(".section-works__slider__dots__num").eq(i).addClass("slick-active");
  //         }
  //     }
  
  //     slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  //         if (currentSlide === slick.$slides.length - 1 && nextSlide === 0) {
  //             $(".section-works__slider__dots__num").addClass("no-transition").removeClass("slick-active");
  //         } else if (currentSlide === 0 && nextSlide === slick.$slides.length - 1) {
  //             $(".section-works__slider__dots__num").addClass("no-transition");
  //             setActiveDot(nextSlide);
  //         } else {
  //             setActiveDot(nextSlide);
  //         }
  //     });
  
  //     slider.on("afterChange", function (event, slick, currentSlide) {
  //         if (currentSlide === 0) {
  //             setTimeout(function () {
  //                 $(".section-works__slider__dots__num").removeClass("no-transition");
  //                 setActiveDot(currentSlide);
  //             }, 0);
  //         } else if (currentSlide === slick.$slides.length - 1) {
  //             setTimeout(function () {
  //                 $(".section-works__slider__dots__num").removeClass("no-transition");
  //             }, 0);
  //         }
  //     });
  
  //     setActiveDot(0);
  // });

  // $('.forest__works .forest__works__slider__wrap').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // });