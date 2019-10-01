<?php
include_once("Model/classApi.php");
$api = new api();
if(isset($_POST["heroi"])){
	$heroi = $_POST["heroi"];
	echo $api -> iniciais_Personagem($heroi);
}