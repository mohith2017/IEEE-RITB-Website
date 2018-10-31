/*----------SMOOTH SCROLLING----------*/


$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });




$(document).ready(function()
{

/*--------------STICKY NAVI-----------------*/



    $('.js--skewed').waypoint(function(direction)
    {
        if(direction == "down"){
            $('nav').addClass('sticky');
            $('.sticky').addClass('animated fadeInDown');

        }else{

            $('nav').removeClass('sticky');
        }
    }, {
        offset: '300px;'
    });


/*--------------SCROLL TO TOP-----------------*/


    $('.js--skewed').waypoint(function(direction)
    {
        if (direction == "down") {
            document.getElementById("top-btn").style.display = "block";
            $('#top-btn').addClass('animated fadeInUp');
        } else {
            document.getElementById("top-btn").style.display = "none";
//            $('#top-btn').addClass('animated fadeInDown');
        }

    }, {
        offset: '200px;'
    });


/*--------------ANIMATION ON SCROLL-----------------*/


    $('.js--button-box').waypoint(function(direction){

        $('.js--button-box').addClass('animated fadeIn');

    },  {
        offset: '160%'

    });


    $('.js--computericon').waypoint(function(direction){

        $('.js--computericon').addClass('animated fadeInUp');

    },  {
        offset: '160%'

    });


    $('.js--aboutusicon').waypoint(function(direction){

        $('.js--aboutusicon').addClass('animated fadeInRight');

    },  {
        offset: '60%'

    });

    $('.js--events-box').waypoint(function(direction){

        $('.js--events-box').addClass('animated fadeInLeft');

    },  {
        offset: '60%'

    });

    $('.js--news-box').waypoint(function(direction){

        $('.js--news-box').addClass('animated fadeInRight');

    },  {
        offset: '60%'

    });


/*--------------LOGIN BOX-----------------*/


    document.querySelector('.login-button').addEventListener('click', function(){
        $('.login-box').addClass('animated fadeInDown');
        $('.bg-modal').addClass('animated fadeIn');
        document.querySelector('.bg-modal').style.display = 'flex';
    });

    document.querySelector('.login-box-close').addEventListener('click', function(){
        $('.login-box').addClass('animated fadeOutUp');
        $('.bg-modal').addClass('animated fadeOut');
        setTimeout(function () {
            document.querySelector('.bg-modal').style.display = 'none';
            $('.login-box').removeClass('animated fadeOutUp');
            $('.bg-modal').removeClass('animated fadeOut');
        }, 500);
    });









});
