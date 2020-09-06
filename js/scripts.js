// const current = document.querySelector('#current');
// const images = document.querySelectorAll('.images img');
//
// images.forEach(img => img.addEventListener('click', e => current.src = e.target.src));
$(document).ready(function(){
  $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function(){

		$(this).addClass('transition');
	}, function(){

		$(this).removeClass('transition');
	});
});
