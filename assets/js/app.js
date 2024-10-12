// slider
$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 2000,
  centerMode: true,
     slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  variableWidth: true,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
                             
          }
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      ]
});
// footer slider
$(".slider-footer").slick({
  dots: false,
  speed: 2000,
    cssEase: 'linear',
  slidesToShow: 8,
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  centerMode: true,
  focusOnSelect: true,
  nextArrow: ".prev",
  prevArrow: ".next",  
      responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay:true,
              autoplaySpeed:0,
                                 }
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay:true,
              autoplaySpeed:0,
                       }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
                autoplay:true,
              autoplaySpeed:0,
                         }
      },
    
  ]
});