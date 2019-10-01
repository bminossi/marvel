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
							console.log(array);
							$.each(array,function(a,b){
								$("#herois").append("<div data-content='"+b.id+"' id='heroi"+a+"' class='box'>"+b.nome+"</div>");
								$("#heroi"+a).css('background-image', 'url('+b.url+')');
								$("#heroi"+a).css('background-size','cover');
							})
						}
				})
			}
		}
	})
})