function showModal(modal) {
	$("#modal_mapa" + modal).modal("show");
	console.log(modal);
}

var nav = $('.barra');

$(window).scroll(function () {

	if ($(this).scrollTop() > 900) {
		nav.addClass("barra_fixa");
	} else {
		nav.removeClass("barra_fixa");
	}
});

jQuery(document).ready(function ($) {
	$(".scroll").click(function (event) {
		event.preventDefault();
		$('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1200);
	});

});

$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 900){
			$('a[href="#top"]').fadeIn();
		}else{
			$('a[href="#top"]').fadeOut();
		}
	});

	$('a[href="#top"]').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});