//SCRIPT SACREE QUETE
 $(document).ready(function(){
 	$(function() {
$('body').hide().fadeIn('slow');

});

// On rend draggable le personnage

$( 'div #perso1' ).draggable({ 

			});


$('#perso1').live('mouseup', function(){

// on rend droppable les zone de lancement
$('.zone').droppable({
	drop: function( event, ui ) {
		var id = ($(this).attr('id'));
// ouvrir FormeToi
if(id == "zone1"){
	$("#zone1").animate({
          borderColor: "#35D52E"
          },2000) // ferme la fonction animate
          	setTimeout(function(){
                	$(location).attr('href','../formetoi/index.html');// on récupère le nom de la page avec le chemin
            }, 2000); // ferme la fonction setTimeout
          }else{
// ouvrir Cartes
	 $("#zone2").animate({
          borderColor: "#35D52E"
          },2000) // ferme la fonction animate
          	setTimeout(function(){
                	$(location).attr('href','../Cartes/index.html');// on récupère le nom de la page avec le chemin
            }, 2000); // ferme la fonction setTimeout
		}// on ferme le else
	}// on ferme la fonction drop:
	});// on ferme le droppable
}); // on ferme le live

// Ajout d'un personnage
// $(document).ready(function () {  
//     $.post("../perso.php", { name: "John", score: "4" },  
//     function success(data){  
//         alert(data);  
//     });  
// }); 

// initialisation de la variable score
// var score = 0;
// score = 16;

// Changement du score de John
// $(document).ready(function () {  
//     $.post("../score.php", { name: "John", score: score },  
//     function success(data){  
//         alert(data);  
//     });  
// }); 

 $.getJSON("../requete.php", function(data){
    
    var scorePerso = data.score;
    // alert(scorePerso);
    $("#perso1")// on applique a l'élément du dessus
                        .find( "p" )//on cherche le p
                            .html( "Tu as "+scorePerso+" points!" );// et au p on effectue un changement html
  });








}); // Ferme le jquery
