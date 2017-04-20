//mobile menu
function openNav(){
	document.getElementById('nav').style.width = "100%";
	document.getElementById('open-btn-nav').style.opacity = "0";
}
function closeNav(){
	document.getElementById('nav').style.width = "0%";
	document.getElementById('open-btn-nav').style.opacity = "1";
}

$('.hero-slider').slick({
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
});