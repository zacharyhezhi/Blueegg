$(document).ready(function() {

    

$('.slide-card').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:"<img class='a-left control-c prev slick-prev' id = 'control-d' src= '//live.staticflickr.com/65535/49020828278_e1400cc533_q.jpg'>",
      nextArrow:"<img class='a-right control-c next slick-next' id='control-e' src='//live.staticflickr.com/65535/49020828258_dc8425eb4d_q.jpg'>",
    
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})
    
$('.center-slide').slick({
  centerMode: true,
  centerPadding: '352px',
  slidesToShow: 1,
      prevArrow:"<img class='a-left control-red prev slick-prev' id = 'control-red-left' src= '//live.staticflickr.com/65535/49056883921_5d5db08ae0_t.jpg'>",
      nextArrow:"<img class='a-right control-red next slick-next' id='control-red-right' src='//live.staticflickr.com/65535/49056371583_cb1d75d3ae_t.jpg'>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
			    
        
});

