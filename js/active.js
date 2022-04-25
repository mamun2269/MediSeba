

$(document).ready(function(){


              //mean menu
              jQuery('#mobile-menu').meanmenu({
                meanScreenWidth: "767",
                meanMenuContainer: '.mobile_menu_active'
  
              });
  

            //hero active
            $('.hero_active').owlCarousel({
              loop:true,
              margin:0,
              nav:true,
              navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
              autoplay:true,
              responsive:{
                  0:{
                    nav:false,
                     items:1                     
                  },
                  480:{
                    items:1
                  },
                  768:{
                      items:1
                  },
                  992:{
                    items:1
                },
                  1200:{
                      items:1
                  }
              }
            })


            //team active
            $('.team_active').owlCarousel({
              loop:true,
              margin:30,
              nav:false,
              navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
              autoplay:false,
              responsive:{
                  0:{
                      items:1,
                      nav:false,
                  },
                  480:{
                    items:2
                  },
                  768:{
                      items:3
                  },
                  992:{
                    items:4
                },
                  1200:{
                      items:4
                  }
              }
            })

            //testimonial  active
            $('.testimonial_active').owlCarousel({
              loop:true,
              margin:50,
              nav:false,
              dots:false,
              navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
              autoplay:false,
              responsive:{
                  0:{
                      items:1,
                      nav:false,
                  },
                  480:{
                    items:1
                  },
                  768:{
                      items:1
                  },
                  992:{
                    items:2
                },
                  1200:{
                      items:2
                  }
              }
            })

            // counter
            $('.counter').counterUp({
              delay: 10,
              time: 1000
          });

 
        /*********Isotope mesonary *****/
        var $grid= $('.gallery_active').isotope({
          itemSelector: '.gallery_item',
          percentPosition: true,                                      /****mesonary active**/
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1
          }
        })

        // filter items on button click
          $('.gallery_menu').on( 'click', 'li', function() {
              var filterValue = $(this).attr('data-filter');       //menu or filtering active
              $grid.isotope({ filter: filterValue });
          });

          
          //magnific popup
          $('.gallery_active').magnificPopup({
            type: 'image',
            delegate:'a',
            gallery:{
              enabled:true
            }
          });

          //sticky menu

          $(window).on('scroll',function() {    
            var scroll = $(window).scrollTop();
            if (scroll < 245) {
             $(".sticky_menu").removeClass("scroll-header");
            }else{
             $(".sticky_menu").addClass("scroll-header");
            }
           });


          //scroll up
          $(function () {
              $.scrollUp({
                scrollName: 'scrollUp', // Element ID
                topDistance: '300', // Distance from top before showing element (px)
                topSpeed: 300, // Speed back to top (ms)
                animation: 'fade', // Fade, slide, none
                animationInSpeed: 200, // Animation in speed (ms)
                animationOutSpeed: 200, // Animation out speed (ms)
                scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
                activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
              });
            });

});






