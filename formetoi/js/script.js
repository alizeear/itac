//SCRIPT FORMETOI
 $(document).ready(function(){
 	$(function() {
$('body').hide().fadeIn('slow');

});

 	//TOUT D'ABORD, ON RENSEIGNE LES INFORMATIONS DE L'ECRAN 
 	var hauteur = screen.height; // HAUTEUR DE L'ECRAN
 	var largeur = screen.width; // LARGEUR DE L'ECRAN
 	var xCentre = (screen.width)/2; // DEFINITION DU CENTRE (x)
 	var yCentre = (screen.height)/2; // DEFINITION DU CENTRE (y)
 	var formSelected; 				//VARIABLE CONTENANT LA FORME SELECTIONNEE



 	//Déclaration des variables du tableau de formes
 	var rond ="rond.png";
 	var carre="carre.png"; 
 	var polygone="polygone.png";
 	var triangle="triangle.png"; 

 	var form1 = new Array(rond, carre, polygone, triangle); //Tableau de base comportant les différentes formes
 	var score = 0;
 	var clique = 0;
 	//On masque les éléments du jeu à l'initialisation
 	$('#maitrise').hide();
 	$('.drop').hide(); //on cache l'étape 2
 	$('.etape2').hide(); //on cache l'étape 2 
 	$('.etape1').hide(); //on cache l'étape 2

 //---------------ETAPE1---------------------
 //------------------------------------------------------------------------------------------------------------------

 	//Choix de la forme à ranger aléatoirement 
 	var nbrAlea = Math.floor(Math.random() * form1.length); //génération aléatoire de formes
 	formSelected = form1[nbrAlea];//Stockage de la forme à identifier aléatoirement

 	//Affichage de la forme selectionnée
 	var Y ='<img src="img/'+formSelected+'" class="selected"/>';
 	$('.forme').append(Y);

 	//Modèle du décompte
 	var time = 3;//Temps du décompte
 	var chrono = time;//Initialisation du chrono

 	//Affichage du décompte
 	var C = '<p id="chrono">Vous avez <span style="color:red">'+chrono+'</span> secondes</p>';
 	$('.chrono').append(C);
 	//Raffraichissement toutes les secondes
 	setInterval(function() {
    	if(chrono>0){
    		chrono--;
    		var C = '<p id="chrono">Il te reste <span style="color:red">'+chrono+'</span> secondes</p>';
 			$('#chrono').remove();
 			$('.chrono').append(C);
    	}	
	}, 1000);



//---------------ETAPE2---------------------
 //------------------------------------------------------------------------------------------------------------------



	var form2 = new Array(); //déclaration du tableau où seront rangés les formes générées aléatoirement

 	for (var i = 0; i < 21; i++) {  //Pour i allant de 0 à 20, faire :

		var nbrAlea = Math.floor(Math.random() * form1.length); //génération aléatoire de formes
 		form2[i]= form1[nbrAlea];	//rangement des formes dans le tableau

 	};


 	function afficheFormes() { 
 		for (var i = 0; i < 21; i++) {
 			
 			var hautAlea = Math.floor(Math.random() * hauteur); //génération aléatoire de la position en hauteur (y)
 			var largAlea = Math.floor(Math.random() * largeur); //génération aléatoire de la position en largeur (x)
 		
 			while(hautAlea>yCentre-300 && hautAlea<yCentre+300 && largAlea>xCentre-300 && largAlea<(xCentre+300)){
 				var hautAlea = Math.floor(Math.random() * hauteur); //génération aléatoire de la position en hauteur (y)
 				var largAlea = Math.floor(Math.random() * largeur); //génération aléatoire de la position en largeur (x)
 			}

 			var tailleAlea = Math.floor(Math.random() * 101); //génération aléatoire de la taille de la forme (101 = 100%)
 			while(tailleAlea<30){
 				var tailleAlea = Math.floor(Math.random() * 101); //génération aléatoire de la taille de la forme (101 = 100%)
 			}

 			// IL NE RESTE QUE L'AFFICHAGE

 			var X ="<img src='img/"+form2[i]+"' width='"+tailleAlea+"' height='"+tailleAlea+"' class='forme"+i+"'/>";
 			
 			$('.etape2').append(X);
 			$('.forme'+i).css('top',hautAlea);
 			$('.forme'+i).css('left',largAlea);

 		 	$( '.forme'+i ).draggable({ // on dit que la div dans td (sans td) est draggable

			});

 			$('.forme'+i).mouseover(function(){
 				
 			});

 			$('.forme'+i).live('mouseup', function(){// quand on fait une action sur une forme
            		var formedetected = ($(this).attr('src')); // on récupère le chemain de l'image concerné
		            $( ".drop" ).droppable({ // on dit que le td de table de #content est droppable
		            drop: function( event, ui ) {// on fait la fonction
		            	var formSelect = "img/"+formSelected; // on déclare notre variable qui contient le chemin de la forme qui sera son identité unique
		            	clique++; // on incrémente de 1 la variable clique
		            	if(clique != 2){ // si on peut continuer de jouer (nombre de clique inférieur à 2)
		            	if(formSelect == formedetected){ // si le nom des deux formes sont les mêmes alors on affiche les félicitations et on augmente le score 
		                $( this )// on applique a l'élément du dessus
		                    .find( "p" )//on cherche le p
		                        .html( "Bravo ! C'est la bonne forme ! Trouves en une autre !" );// et au p on effectue un changement html
		                        score++;// on augmente le score de 1
		                        
		                        var D = '<h3 id="drop">Tu as gagné <span style="color:red">'+score+'</span> points</h3>';
		                        	$('#drop').remove(); // on efface la phrase pour la réactualiser
 									$('.drop').append(D);// on affiche la phrase avec le score actualisé
 									$("'img.forme'+i").hide() // permet de ne plus pouvoir bouger une forme validé
		                    }else{ // si le l'égalité de la condition est fausse on le dit
		                    	$( this )// on applique a l'élément du dessus
		                    .find( "p" )//on cherche le p
		                        .html( "Désolé ce n'est pas la bonne forme !" );// et au p on effectue un changement html
		                    };
		                }else{
		                	$( this )// on applique a l'élément du dessus
		                    .find( "p" )//on cherche le p
		                    .html(""); // on affiche une chaine vide
		                    if(formSelect == formedetected){ // nécéssaire pour éviter d'incrémenter a chaque fois même s'il y a une erreur
		                    	score++;
		                    }
		                    	 var E = '<h3 id="drop">Le jeu est terminé! Tu as gagné <span style="color:red">'+score+'</span> points</h3>';
		                        	$('#drop').remove(); // on efface la phrase pour la réactualiser
 									$('.drop').append(E);// on affiche la phrase avec le score actualisé
		                        $("img").hide() // permet de ne plus pouvoir bouger une forme validé
		                        if (score == 2) { // si la variable score est à 2 alors le joueur a gagner et on affiche l'animation du badge
		                        setTimeout(function(){ // délais avant la fonction suivante
		                        $('.drop').ready(function(){// quand le cerle du milieu est chargé, on lance la suite
		                        	$('#maitrise').fadeIn('slowly').animate({//on fait apparaitre en fondu l'image, puis on l'anime
		                        		        width: "30%",// elle augmente sa taille
										        marginLeft: "500px",// elle se positionne a 380px de la gauche
										      }, 1500 );// on règle la vitesse de l'animation
		                        	$('.drop').hide(); // on cache la zone de drop pour laisser place au badge
		                        }); // ferme .ready 
		                    }, 2500); // fin de la zone a afficher après le délais passé, délais 2500 miliseconde
						// on récupère le dernier score du perso
						 $.getJSON("../requete.php", function(data){
						    var score2 = data.score;
						     // alert(scoreinit);
						     var scoreAdd = Number(score2) + Number(score);
						     // chargement du score mis à jour
    							 $.post("../score.php", { name: "John", score: scoreAdd },  
     								function success(data){  
     									// alert(scoreAdd);
     										});  
 												 });
		                   
		                    }// ferme if (score == 2)
		                    else{
						// on récupère le dernier score du perso
						 $.getJSON("../requete.php", function(data){
						    var score2 = data.score;
						     // alert(scoreinit);
						     var scoreAdd = Number(score2) + Number(score);
						     // chargement du score mis à jour
    							 $.post("../score.php", { name: "John", score: scoreAdd },  
     								function success(data){  
     									// alert(scoreAdd);
     										});  
 												 });
		                    }; // ferme le else

		                }// ferme le else
		            }// on ferme la fonction drop: function( event, ui )

		        }); // on ferme la fonction du droppable

            });// on ferme la fonction $('.forme'+i).live('mouseup', function()


 		};
	 }





	
//------------------------------------------------------------------------------------------------------------------ZONE DRAG & DROP
	//FONCTION POUR CENTRER 
	jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}
	
	//ON APPLIQUE LA FONCTION CENTRER à L'ETAPE 1
	$('.etape1').center();


//------------------------------------------------------------------------------------------------------------------AFFICHAGE DES ETAPES
//Affichage du jeu
	//Etape 1
 	$('.etape1').show(); //on affiche l'étape 1
 	//Etape 2 (après 10s)
 	setTimeout(function() {
 		$('.etape1').hide(); //on cache l'étape 1
 		$('.drop').show(); //affichage de la zone de drop
 		$('.drop').center(); //ON APPLIQUE LA FONCTION CENTRER à LA ZONE DRAG N DROP
    	$('.etape2').append(afficheFormes());//affichage de l'etape 2
 		$('.etape2').fadeIn(); //apparition des formes en transition
	}, time+'000'); //temps en millisecondes 


//------------------------------------------------------------------------------------------------------------------AU CLICK SUR LES FORMES

		
 });

