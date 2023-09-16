$('.owl-carousel').owlCarousel
(
{
items:3,
margin:0,
autoplay:true, 
loop:true,
slideTransition:'linear',
autoplaySpeed:1500,

responsive:{
    0:{
        items:1,
        nav:true
    },
    600:{
        items:2,
        nav:false
    },
    1000:{
        items:5,
        nav:true,
        loop:false
    }
}

} 
);



