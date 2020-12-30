
// $(window).on("load", function() 
// {
// $(".loader .inner").fadeOut(500, function()
//     {
//     $(".loader").fadeOut(750);
//     });

//     $(".items").isotope(
//         {
//         filter: '*',
//         layoutMode: 'fitRows',
//         animationOptions:
//             {
//             duration: 1500,
//             easing: 'linear',
//             queue: false
//             }
//         });
// });





$(document).ready(function()  {
    $('#slides').superslides({
            animation: 'fade',
            play: 5000
    });
});




var typed = new Typed(".typed", {
    strings: ["Software Engineer", "QA developer", "Test Automation engineer", "Super Daddy"], 
    typeSpeed: 70,
    loop:true,
    startDelay:1000,
    showCursor:true
});




$('.owl-carousel').owlCarousel({
    loop:true,
    items: 8,
    responsive:{
        0:{
            items:1
        },
        200:{
            items:4
        },
        768:{
            items:5
        },
        1080:{
            items:7
        }
    }
});








var skillsTopOffset = $(".skillsSection").offset().top;
var statsTopOffset = $(".statsSection").offset().top;

$(window).scroll(function() {

    if(window.pageYOffset > skillsTopOffset - $(window).height() + 200)
        {
        $('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: '#fed330',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent) 
                {
                $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

    if(window.pageYOffset > statsTopOffset - $(window).height() + 200)
        {
            $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            
            $({ countNum: $this.text()}).animate({
                countNum: countTo
            },
        
            {
                duration: 2000,
                easing:'linear',
                step: function() {
                $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                $this.text(this.countNum);
                //alert('finished');
                }
            
             });  
        
            });

        }

});


$('[data-fancybox-trigger="portfolioImg"]').fancybox();


$(".items").isotope({
    filter:'*',
    animationOptions:{
        duration: 1500,
        easing: 'linear',
        queue: false 
    }
});

$("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");/*'this' reffers to the object on whch the event was calles on  */

    var selector = $(this).attr("data-filter");

    $(".items").isotope(
        {
        filter: selector,
        animationOptions:
            {
            duration: 1500,
            easing: 'linear',
            queue: false
            }
        });
    return false;
});




