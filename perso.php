<?php 
    include ("connect.php");
    include ("connexion.php");
 ?>
<?php 
// Page test.php  
echo $_POST['name'] .' '. $_POST['score']; 
$nom = $_POST['name'];
$score = $_POST['score'];

$query="INSERT INTO personages values ('','$nom','$score')"; // requête d'ajout 
	$result=mysql_query($query) or die (mysql_error());// on recupere le resultat
?>  