var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}

///
$('#toggle').click(function(){
    $('.header .container nav .menu').toggleClass('active');
})



////owlcarousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:80,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false,
            margin:40
        },
        1000:{
            items:2,
            nav:true,
            loop:true,
            margin:40
        },
        2000:{
            items:2,
            nav:true,
            loop:true,
            margin:80
        }
    }
})

// arrow btn top
$(window).scroll(function(){
    $scrolltop=$(window).scrollTop();
    if($scrolltop>680){
        $('.btn_arrow_top').css('right','30px');
    }else{
        $('.btn_arrow_top').css('right','-60px');
    }
    if($scrolltop>20){
        $('.header').addClass('active_header');
    }else{
        $('.header').removeClass('active_header');
    }
    if($scrolltop>250){
        $('.header').addClass('active_header_new');
    }else{
        $('.header').removeClass('active_header_new');
    }
});

$('.btn_arrow_top').click(function(){
    $('body,html').animate({scrollTop:0});
})