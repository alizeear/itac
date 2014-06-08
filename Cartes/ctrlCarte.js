//CONTROLEUR DU JEU DE CARTE
//Définition des variables 
var tt_echange=new Array(2);
var cliquej = 0;
var joueurSource, caseSource;
var tourjoueur=1;
//CONTROLEUR DU JEU DE CARTE
function ctrl_chargement_page(tt_ref,tt_cartes){
	gui_message_de_bienvenue();
	ctrl_tableau_de_cartes(tt_ref,tt_cartes);
}

/**APP : Depuis l'index
BUT : Génère automatiquement un tableau de cartes dont les symboles et les couleurs sont pseudo aléatoires, puis l'affiche
E : Le tableau de référence (contenant les cartes) et le tableau de cartes vide à l'origine.
S : X
E/S : X
COM : X**/
//proc ctrl_tablea_de_cartes c'est mod T_Tableau2D tt_ref, tt_cartes
function ctrl_tableau_de_cartes(tt_ref,tt_cartes){
	tableau_de_cartes(tt_ref);	//Appel de la fonction de génération du tableau de carte pour remplir tt_ref (pour le moment en fixe)
	var posalea=0;//Initialisation de la position aléatoire à 0
	
	while(tt_cartes.length<21){
		//Tant que la longueur de tt_cartes est inférieure à 20 (tant qu'il reste une case de vide)
		posalea=alea_case(posalea) ;//On génère une nouvelle position aléatoire pour posalea
		if(verif_case(tt_ref, posalea)){ //On vérifie que la case désignée soit libre
			vider_case(tt_cartes,tt_ref,posalea);//Si c'est le cas, on vide la case dans tt_ref, et on met sa valeur dans tt_cartes.
		}
	}
	distribue(tt_cartes);//on distribue les cartes dans les 5 mains
	cgi_tt(tt_cartes);//on affiche les cartes
}

/**APP : Depuis le programme principal
BUT : Gère les clics sur une carte et appelle les différentes fonctions du jeu
E : Le numéro du joueur qui a cliqué, le numéro de la case concernée
S : X
E/S : X
COM : X**/
//proc ctrl_clicjoue c'est fixe T_Entier numjoueur, numcase
function ctrl_clicjoue(numjoueur,numcase){
	if(tourjoueur!=numjoueur&&numjoueur!=5){
		//Si le numéro du joueur entré n'est pas le même que celui du joueur du programme
		//Et si le numéro du joueur est différent de cinq (la pioche)
		alert("Ce n'est pas au tour de ce joueur !");
		//On signale que le joueur cliqué n'est pas le bon
	}else{
		if(cliquej==0){//Si le "clic joueur" est égal à zéro
			if(numjoueur==5){//Et qu'on clique sur la pioche
				alert('Sélectionnez une carte dans votre main !');
				//On signale au joueur qu'il faut qu'il tire une carte
			}else{//Sinon (donc si on clique sur une autre carte)
				clicjoue_stocke(numjoueur, numcase,tt_echange);//On stocke la carte dans le tableau d'échange
				gui_rajouteclasse(numjoueur,numcase);//On rajoute la classe ombre sur la carte cliquée
				joueurSource=numjoueur;//Le joueur source prend pour valeur le numéro du joueur courant
				caseSource=numcase;//La case source prend pour valeur le numéro de la case source
				cliquej=1;//Et on passe le "clic joueur" à 1
			}
		}else if(cliquej==1){//Si le "clic joueur" est à 1
			if(numjoueur!=5){ //Et que le clic se fait ailleurs que sur la pioche
				alert('Sélectionnez une carte de la pioche !');//On le signale à l'utilisateur
			}else{//Sinon
				clicjoue_echange(numjoueur,numcase,tt_echange,joueurSource,caseSource);
				//On échange les deux valeurs dans le grand tableau
				tourjoueur=change_joueur(tourjoueur);
				//On change le tour du joueur
				verifieMain();
				//Et on vérifie si le joueur a gagné
			}
			cgi_tt(tt_tabAlea);//on affiche les cartes
		}
	}

}