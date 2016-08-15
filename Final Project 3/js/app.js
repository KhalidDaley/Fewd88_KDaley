$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())
	})

	// toggle mobile nav
	$('#burger').click(function () {
		$('#mobile-nav').slideToggle();
	});
})

//  slideshow for cover photos
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// slideshow for advertisements
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#adslideshow > div:first')
    .fadeOut(500)
    .next()
    .fadeIn(500)
    .end()
    .appendTo('#adslideshow');
},  1000);
