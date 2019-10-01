<?php
class api
{
	private $publickey = "5d383b8342391b714d716d09d9a87943";
	private $privatekey = "8302b7813312a4d2b9148a37af137483cb4c2239";
	//function __construct($apiKey)
	//{
	//	$this->apiKey = $apiKey;
	//}
	public function hash(){
		$ts=time();
		return "&ts=".$ts."&apikey=".$this->publickey."&hash=".md5($ts.$this->privatekey.$this->publickey);
	}
	public function chamada_Api($operacao){
		$ch = curl_init();
		$url = "http://gateway.marvel.com".$operacao.$this -> hash();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
  		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept: application/json'));
		$output= curl_exec($ch);
		$output = json_decode($output);
 		return $output -> data -> results;	
	}
	public function iniciais_Personagem ($iniciais){
		$todosPersonagens = $this -> chamada_Api("/v1/public/characters?nameStartsWith=".$iniciais);
		$personagens = array();
		foreach($todosPersonagens as $personagem){
			array_push($personagens,array(
				"nome" => $personagem -> name,
				"url" => $personagem -> thumbnail -> path.".jpg",
				"id" => $personagem -> id
			));
		}
		echo json_encode($personagens);
		return false;
	}
	public function coletar_Historias($heroi){

	}
}
