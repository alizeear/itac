
//VUE du jeu de carte
/**Initialisation des variables*/
	var CARRE = '<img src="cartes_carre.png"/>';
	var ROND = '<img src="cartes_rond.png"/>';
	var TRIANGLE = '<img src="cartes_tri.png"/>';
	var ETOILE = '<img src="cartes_polyg.png"/>';

/**APP : Depuis le contrôleur
BUT : Met à jour l'affichage
E : Le tableau de carte généré
S : X
E/S : X
COM : X**/
//proc cgi_tt c'est fixe T_Tableau2D tt
function cgi_tt(tt){
	var numdiv = 1;
	var numcase;
	
	for(var i=1;i<=21;i++){//Pour i allant de 1 à 21 par pas de 1
		if(i==5||i==9||i==13||i==17){//Chaque fois qu'on passe 4i, on change de "numdiv"
			numdiv=numdiv+1;
		}
		
		
		if(i==4||i==8||i==12||i==16||i==20){//Si le numéro de la case est un multiple de 4
			numcase=3;//On considère qu'elle est égale à 3
		}else{
			numcase=(i%4)-1;//Sinon, elle est égale au reste de la division par 4 -1 (pour avoir "0,1,2,3")
		}
		
		switch(tt[i][1]){//Choix sur la forme représentée sur la première colonne de la ligne d'un tableau
			case 'carre' : document.getElementById('_div'+numdiv+'case'+numcase).innerHTML=CARRE;
			break;
			case 'rond' : document.getElementById('_div'+numdiv+'case'+numcase).innerHTML=ROND;
			break;
			case 'triangle' : document.getElementById('_div'+numdiv+'case'+numcase).innerHTML=TRIANGLE;
			break;
			case 'etoile' : document.getElementById('_div'+numdiv+'case'+numcase).innerHTML=ETOILE;
			break;
		}
		switch(tt[i][2]){//Choix sur la couleur de la case sur la seconde colonne de la ligne d'un tableau
			case '_rouge' : document.getElementById('_div'+numdiv+'case'+numcase).className="ROUGE";
			break;
			case '_jaune' : document.getElementById('_div'+numdiv+'case'+numcase).className="JAUNE";
			break;
			case '_bleu' : document.getElementById('_div'+numdiv+'case'+numcase).className="BLEU";
			break;
			case '_orange' : document.getElementById('_div'+numdiv+'case'+numcase).className="ORANGE";
			break;
			case '_violet' : document.getElementById('_div'+numdiv+'case'+numcase).className="VIOLET";
			break;
			case '_rose' : document.getElementById('_div'+numdiv+'case'+numcase).className="ROSE";
			break;
		}
	}
}

/**APP : Depuis le contrôleur
BUT : Appeler l'affichage du tutoriel et gérer se temporisation
E : X
S : X
E/S : X
COM : Ce gui est juste un appelant de la fonction (pour contourner le problème des guillemets sur le timeout)*/
//proc gui_message_de_bienvenue c'est
function gui_message_de_bienvenue(){
	gui_tuto(0);//On appelle gui_tuto de 0
	window.setTimeout("gui_tuto(1);",5000);//Au bout de 5 secondes gui_tuto de 2
	window.setTimeout("gui_tuto(2);",15000);//Au bout de 15 secondes gui_tuto de 3
	window.setTimeout("gui_tuto(3);",22000);//Au bout de 22 secondes gui_tuto de 4
	window.setTimeout("gui_tuto(4);",30000);//Au bout de 30 secondes gui_tuto de 5

}

/**APP : Depuis gui_message_de_bienvenue()
BUT : Définir la phrase à afficher pour le tutoriel
E : un entier
S : X
E/S : X
COM : X**/
//proc gui_tuto c'est fixe T_Entier choix
function gui_tuto(choix){
	var phrase;//On définit une variable phrase qui sera affichée
	switch(choix){//On fait un switch sur le choix
		case 0 :
			 phrase= "Bienvenue sur Quatre cartes ! <br/>Le principe de ce jeu est de collecter quatre cartes identiques.<br/>Pour ce faire, échangez des cartes à travers la pioche.";
			break;
		case 1 :
			 phrase= "La pioche est l'élément se trouvant au centre de la table.<br/>Le joueur 1 est celui au dessus de ce message dans le sens de lecture.<br/>Les tours se font dans l'ordre des aiguilles d'une montre<br/>";
		break;
		case 2 : 
			 phrase= "Si l'un des membres du jeu remporte la manche, tous gagnent des points.<br/> Il vous faudra vous entraider pour vaincre le plus rapidement possible.<br/>";
		break;
		case 3:
			 phrase= "Gagner avec des carrés ou des ronds vous donnera deux points.<br/>Gagner avec avec un autre signe vous donnera un seul point.<br/>";
		break;	
		case 4:
			 phrase= "Bonne chance, et bon jeu ;)";
		break;	
	}

	alert(phrase);//Affichage de l'alert

}

/**APP : Depuis le contrôleur
BUT : Rajouter une ombre autour de la carte sélectionnée
E : le numéro du joueur, le numéro de la case
S : X
E/S : X
COM : X**/
//proc gui_rajouteclasse c'est fixe T_Entier numjoueur, numcase
function gui_rajouteclasse(numjoueur,numcase){
	document.getElementById('_div'+numjoueur+'case'+numcase).className =document.getElementById('_div'+numjoueur+'case'+numcase).className +" ombre";
	//On chercher l'ID et on rajoute une classe à la case qui comporte la carte
}

/**APP : Depuis le modèle
BUT : changer le tour du joueur visuellement
E : le numéro du joueur en cours
S : X
E/S : X
COM : X**/
//proc gui_au_tour_du_joueur c'est fixe T_Entier num
function gui_au_tour_du_joueur(num){
	document.getElementById('nomjoueur').innerHTML=num;//Changement de la valeur du span
}

/**APP : Depuis le modèle
BUT : Changer le texte du gagnant
E : le numéro du joueur
S : X
E/S : X
COM : X**/
//proc gui_joueur_gagnant c'est fixe T_Entier num
function gui_joueur_gagnant(num){
	document.getElementById('gainjoueur').innerHTML="Le joueur "+num+" a gagné !";//Changement de la valeur de la div entière.
}
