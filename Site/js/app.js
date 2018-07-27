
$( document ).ready(function() {
    console.log( "ready!" );

$('.owl-carousel').owlCarousel({
    loop:true,
    animateOut: 'fadeOut',
    margin:300,
    nav:false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateIn: true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
});
