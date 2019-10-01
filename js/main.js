$(document).ready(function(){
	$('#pesquisa').on("keyup",function(){
		if($("#pesquisa").val().length>=3){
			$.post("api.php","heroi="+$("#pesquisa").val()).done(function(e){
				$("#herois").html();
				if(e == "[]"){
					$("#herois").html("Herói não encontrado");
				}
				else{
				var array = JSON.parse(e);
				console.log(array);
				$.each(array,function(a,b){
					$("#herois").append("<div id='heroi"+a+"' class='box'>"+b.nome+"</div>");
					$("#heroi"+a).css('background-image', 'url('+b.url+')');
					$("#heroi"+a).css('background-size','cover');
				})
				}
			})
		}
	})
})