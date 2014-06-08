<?php 
    include ("connect.php");
    include ("connexion.php");
 ?>
<?php 
// Page test.php  


$query="SELECT score FROM personages WHERE nom='John'"; // requête d'ajout 
	$result=mysql_query($query) or die (mysql_error());// on recupere le resultat
	$res=mysql_fetch_object($result);


header("content-type: application/json");
	echo json_encode($res);  
?>  