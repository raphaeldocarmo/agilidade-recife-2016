function tamanhoMinimoDaSecao(){
	var tamanhoDaJanela = $(window).height();
	$("article").css("min-height", tamanhoDaJanela)
}

$( window ).resize(function() {
	tamanhoMinimoDaSecao();
});


function rolarMenu(){
	$(".menu li").on("click", function(){
		var pegaLi = $(this).attr("class");
		$(".menu li").removeClass("selecionado");
		$(this).addClass("selecionado");
		$("html, body").animate({
			scrollTop: $("article." + pegaLi).offset().top
		}, 2000)	
	})
}

$(".link-newsletter").on("click", function(){
	$("html, body").animate({
		scrollTop: $("article.contato").offset().top
	}, 2000)	
})


rolarMenu();
tamanhoMinimoDaSecao();