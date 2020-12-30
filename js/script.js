$(document).ready(function()  {
    $('#slides').superslides({
            animation: 'fade',
            play: 5000
    });
});


// var typed = new Typed(".typed", {
//     strings: ["Software Engineer", "QA developer", "Test Automation engineer", "Super Daddy"], 
//     typeSpeed: 70,
//     loop:true,
//     startDelay:1000,
//     showCursor:true
// });




// $('.owl-carousel').owlCarousel({
//     loop:true,
//     items: 8,
//     responsive:{
//         0:{
//             items:1
//         },
//         200:{
//             items:4
//         },
//         768:{
//             items:5
//         },
//         1080:{
//             items:7
//         }
//     }
// });





// var skillsTopOffset = $(".skillsSection").offset().top;
// var skillsTopOffset = $(".statsSection").offset().top;

// console.log(window.pageYOffset);

// $(window).scroll(function() {

//     if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

//         $('.chart').easyPieChart({
//             //your options goes here
//             easing:'easeInOut',
//             barColor: '#C4E538',
//             trackColor: false,
//             scaleColor: false,
//             lineWidth: 4, 
//             size:152,
//             onStep: function(from, to, percent) {
//                 $(this.el).find('.percent').text(Math.round(percent));
//             }
//         });

//     }

//     if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

//         $('.counter').each(function() {
//             var $this = $(this),
//                 countTo = $this.attr('data-count');
            
//             $({ countNum: $this.text()}).animate({
//                 countNum: countTo
//             },
        
//             {
            
//                 duration: 1000,
//                 easing:'linear',
//                 step: function() {
//                 $this.text(Math.floor(this.countNum));
//                 },
//                 complete: function() {
//                 $this.text(this.countNum);
//                 //alert('finished');
//                 }
            
//             });  
        
        
//         });

//     }






// });


// });
