<?php
include_once("Model/classApi.php");
$api = new api();
if(isset($_POST["heroi"])){
	$heroi = $_POST["heroi"];
	echo $api -> iniciais_Personagem($heroi);
}
if(isset($_POST["id_Heroi"])){
	$id_Heroi = $_POST["id_Heroi"];
	echo $api -> coletar_Historias($id_Heroi);
}