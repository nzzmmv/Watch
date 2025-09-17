$(document).ready(function(){
    $('.carousel__inner').slick({
       speed: 1500,
       adabtiveHeight: true,
       prevArrow: '<button type="button" class="slick-prev"><img src="./src/icon/left-solid.png" alt="5"></button>',
       nextArrow: '<button type="button" class="slick-next"><img src="./src/icon/right solid.png"></button>',
       responsive: [
        {
            breakpoint: 992,
            settings: {
              dots: true,
              arrws: false
            }    
        }
       ]
    }
    );

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });


      $(window).scroll(function(){
        if($(this).scrollTop() > 1600){
          $('.pageup').fadeIn();
        }
        else{
          $('.pageup').fadeOut();
        }
      });

      // $("a [href^='#']").click(function(){
      //   var _href = $(this).attr("href");
      //   $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      //   return false;
      // });
});