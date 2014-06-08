<?php 
    include ("connect.php");
    include ("connexion.php");
 ?>
<?php 
// Page test.php  

$nom = $_POST['name'];
$score = $_POST['score'];

$query="UPDATE personages SET score='".$score."' WHERE nom='$nom'"; // on fait la requête 
		$res=mysql_query($query) or die (mysql_error());// on recupere le resulat ou on montre les erreurs
	
?>  