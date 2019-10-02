$(document).ready(function(){
	var reqAtiva=false;
	$('#pesquisa').on("keyup",function(){
		if($("#pesquisa").val().length>=4){
			$("#herois").html("");
			if(reqAtiva==false){
				reqAtiva=true;
				$.post("api.php","heroi="+$("#pesquisa").val()).done(function(e){
						reqAtiva=false;
						if(e == "[]"){
							$("#herois").html("Herói não encontrado");
						}
						else{
							var array = JSON.parse(e);
							$.each(array,function(a,b){
								$("#herois").append("<div data-content='"+b.id+"' id='heroi"+a+"' class='box'>"+b.nome+"</div>");
								$("#heroi"+a).css('background-image', 'url('+b.url+')');
								$("#heroi"+a).css('background-size','cover');
							})
							$(".box").on("click",function(e){
							var heroiSelecionado = $(this).html();
							var styleHeroi = $(this).attr("style");
							var idHeroi = $(this).attr("data-content")
							var caixaLivre = $("#menu").find(".vazio:first");
							if(caixaLivre.length>0){
							caixaLivre.html(heroiSelecionado);
							caixaLivre.attr("style",styleHeroi);
							caixaLivre.attr("data-content",idHeroi);
							caixaLivre.removeClass("vazio");
							}
							else{
								alert("Ops! Remova um herói da seleção");
							}
						})
						}
				})
			}
		}
	})
	$(".gerar").on("click",function(){
		$("#herois").html("Resultados para sua pesquisa:<table id='resultado'></table");
		$("#herois").removeClass("wrapper");
		$("#herois").addClass("resultado");
		var selecionados = $(".box2");
		$.each(selecionados,function(a,b){
			var idHeroi = $(b).attr("data-content");
			var imagem = $(b).attr("style");
			$.post("api.php","id_Heroi="+idHeroi).done(function(e){
				var req = JSON.parse(e);
				var randomItem = req[Math.floor(Math.random()*req.length)];
				if(randomItem){
					//$("#herois").append("<div id='resultado'>"+$(b)+"</div>");
					$("#resultado").append("<tr id='"+idHeroi+"'><td></td><td>"+randomItem.titulo+"</td></tr>");
					$("#"+idHeroi).find("td:first").attr("style",imagem)
				}
				else{
					$("#resultado").append("<tr id='"+idHeroi+"'><td></td><td>Esse herói não possui histórias, trata-se de uma capa</td></tr>");
				}
			})
		})
	})
})