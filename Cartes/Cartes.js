//Définition des variables
var tt_joueur1 =new Array(4);
var tt_joueur2 =new Array(4);
var tt_joueur3 =new Array(4);
var tt_joueur4 =new Array(4);
var tt_pioche = new Array(4);

/**APP : Depuis le contrôleur
BUT : Génère automatiquement un tableau de cartes dont les symboles et les couleurs sont fixes
E : X
S : X
E/S : Le tableau de référence, vide à l'origine.
COM : X**/
//proc tableau_de_cartes c'est mod T_Tableau2D tt
function tableau_de_cartes(tt){
	for(var i=1;i<=21;i++){//Pour i allant de 0 à 20 par pas de 1
		couleur=couleurAleatoire(couleur);//On affecte une couleur aléatoire
		tt[i]=new Array(4);//On créé 4 lignes dans la case i
		if(i>=1&&i<=5){ //Pour i compris entre 0 et 3
			tt[i]=[i,'carre','_'+couleur,10];//On remplit le tableau créé
		}
		if(i>=5&&i<=11){ //Idem que précédemment.
			tt[i]=[i,'triangle','_'+couleur,100];
		}
		if(i>=11&&i<=16){		
			tt[i]=[i,'rond','_'+couleur,1000];
		}
		if(i>=16&&i<=21){
				tt[i]=[i,'etoile','_'+couleur,10000];
		}
	}
	//Note : la dernière case sert à la vérification (pour ne pas avoir plus de 2 cartes identiques dans chaque main
	//Note bis : la fonction de vérification n'a pas été créée.
}

/**APP : Depuis le contrôleur
BUT : Génère aléatoirement une couleur de référence
E : X
S : X
E/S : La variable "couleur"
COM : X**/
//proc couleurAleatoire c'est result T_ChaineDeCaractères couleur
function couleurAleatoire(couleur){
	var nb=Math.round(Math.random()*6);//On créé un nombre aléatoire entre 0 et 6
	switch(nb){
	//On affecte la couleur correspondante
	case 1 : couleur ='bleu';
	break;
	case 2 :couleur ='rouge';
	break;
	case 3 :couleur ='orange';
	break;
	case 4 :couleur ='jaune';
	break;
	case 5 :couleur ='violet';
	break;
	case 6:couleur ='rose';
	break;
	}
	return  couleur;//Et on la retourne
}


/**APP : Depuis le contrôleur
BUT : Génère aléatoirement un nombre entre 0 et 19
E : X
S : X
E/S : La variable "nbalea"
COM : X**/
//proc alea_casec'est result T_Entier nbalea
function alea_case(nbalea){
	nbalea=Math.round(Math.random()*20)+1;//On génère un nombre aléatoire entre 0 et 19
	return nbalea;//Et on le retourne
}

/**APP : Depuis le contrôleur
BUT : Vérifie si la case 1 de la ligne alea du tableau de référence existe toujours
E : le tableau de référence, le nombre aléatoire
S : X
E/S : Booléen (vrai elle existe, faux elle n'existe plus)
COM : Affiche une erreur une fois sur 2, la case tt_ref[alea] est considérée comme "undefined"*/
//proc verif_case c'est fixe T_Tableau2D tt_ref, T_Entier alea
function verif_case(tt_ref,alea){
	//CETTE LIGNE AFFICHE DES ERREURS
	if(tt_ref[alea][1]==0){//Si la case visée est vide 
		return false;//On retourne faux
	}else{
		return true ;//Sinon on retourne vrai
	}
}

/**APP : Depuis le contrôleur
BUT : Vide la case une fois qu'elle a été sélectionée depuis le tableau de référence
E : le tableau de référence, le tableau à remplir, le nombre aléatoire
S : X
E/S :X
COM : Cette fonction prend le tableau de cartes et rajoute à sa case taille-1 la valeur de tt_ref[alea]. Puis elle vide la case tt_ref[alea]*/
//proc vider_case c'est mod T_Tableau2D tt_ref, tt_cartes fixe T_Entier alea
function vider_case(tt_cartes, tt_ref,alea){
	tt_cartes[tt_cartes.length]=tt_ref[alea] ;//On passe la valeur du tt de référence dans le tableau de carte
	tt_ref[alea]=[alea,0,0,0];//Et on initialise les autres cases à 0 (pour la vérification par la suite)
}

/**APP : Depuis le contrôleur
BUT : Distribue les cases dans les différents tableaux utilisateurs
E : Le tableau de cartes
S : X
E/S :X
COM : */
//proc distribue c'est fixe T_Tableau2D tt_cartes
function distribue(tt_cartes){
	for(var i=1;i<=21;i++){
			if(i<5){
				tt_joueur1[i-1]=tt_cartes[i];
			}else if (i<9){
				tt_joueur2[i-5]=tt_cartes[i];
			}else if(i<13){
				tt_joueur3[i-9]=tt_cartes[i];
			}else if(i<17){
				tt_joueur4[i-13]=tt_cartes[i];
			}else{
				tt_pioche[i-17]=tt_cartes[i];
			}
		}
}

/**APP : Depuis le contrôleur
BUT : Stocke dans un tableau la valeur de la carte à échanger
E : Le numéro du joueur et le numéro de la case
S : X
E/S : Le tableau contenant les cartes qui seront échangées
COM : X**/
//proc clicjoue_stocke c'est mod T_Tableau2D tt, fixe T_Entier numjoueur, lacase
function clicjoue_stocke(numjoueur,lacase,tt){
	//On définit une variable "joueur"
	var joueur;
	switch(numjoueur){
		//On switch sur le numéro du joueur pour choisir le bon tableau à toucher.
		case 1 : 
			joueur=tt_joueur1;
		break;
		case 2 : 
			joueur=tt_joueur2;
		break;
		case 3 : 
			joueur=tt_joueur3;
		break;
		case 4 : 
			joueur=tt_joueur4;
		break;
	}
	tt[0]=joueur[lacase];
	//On remplit la première case avec la valeur de la carte cliquée.
}

/**APP : Depuis le contrôleur
BUT : Echange les valeurs des carte à échanger
E : Le numéro du joueur et le numéro de la case, le numéro du joueur et de la case source
S : X
E/S : Le tableau contenant les cartes qui seront échangées
COM : X**/
function clicjoue_echange(numjoueur,lacase,tt,jsource,csource){
	var joueur;
	var grossecase;
	//On définit la variable du joueur (qui sert à savoir quel tableau toucher)
	//Puis celle de la grosse case (la case du tt_tabAlea)
		tt[1]=tt_pioche[lacase];
		//La case à échanger devient la case de la pioche 
		switch(jsource){
			case 1 : 
				grossecase=csource+1;
				joueur=tt_joueur1;
			break;
			case 2 : 
				grossecase=csource+5;
				joueur=tt_joueur2;
			break;
			case 3 : 
				grossecase=csource+9;
				joueur=tt_joueur3;
			break;
			case 4 : 
				grossecase=csource+13;
				joueur=tt_joueur4;
			break;
		}
	joueur[csource]=tt[1];//Le tableau du joueur de la case source prend pour valeur la carte de la pioche
	tt_pioche[lacase]=tt[0];//Puis la pioche à la case cliquée prend pour valeur la carte piochée
	tt_tabAlea[grossecase]=tt[1];//On remplace la case dans le gros tableau
	tt_tabAlea[lacase+17]=tt[0];//Et dans la pioche aussi
	cliquej=0;//Puis on termine le tour
}

/**APP : Depuis le contrôleur
BUT : Vérifie si un joueur a gagné après son tour
E : X
S : X
E/S :X
COM : On vérifie si la case 1 est égale à la case 2, la case 2 à la case 3 et la case 3 à la case 4**/
//proc verifieMain c'est
function verifieMain(){
	if(tt_joueur1[0][1]==tt_joueur1[1][1]&&tt_joueur1[1][1]==tt_joueur1[2][1]&&tt_joueur1[2][1]==tt_joueur1[3][1]){
		gui_joueur_gagnant(1);
	}
	if(tt_joueur2[0][1]==tt_joueur2[1][1]&&tt_joueur2[1][1]==tt_joueur2[2][1]&&tt_joueur2[2][1]==tt_joueur2[3][1]){
		gui_joueur_gagnant(2);
	}
	if(tt_joueur3[0][1]==tt_joueur3[1][1]&&tt_joueur3[1][1]==tt_joueur3[2][1]&&tt_joueur3[2][1]==tt_joueur3[3][1]){
		gui_joueur_gagnant(3);
	}
	if(tt_joueur4[0][1]==tt_joueur4[1][1]&&tt_joueur4[1][1]==tt_joueur4[2][1]&&tt_joueur4[2][1]==tt_joueur4[3][1]){
		gui_joueur_gagnant(4);
	}
}

/**APP : Depuis le contrôleur
BUT : changer le tour du joueur
E : X
S : X
E/S :X
COM :**/
//proc change_joueur c'est result T_Entier num
function change_joueur(num){
	if(num==4){
		//Si le numéro du joueur est quatre
		num=1;
		//Il devient 1
	}else{
		//Sinon
		num=num+1;
		//Il s'incrémente de 1
	}
	gui_au_tour_du_joueur(num);
	//On appelle la fonction qui actualise le numéro de tour du joueur
	return num;
	//Et on retourne le numéro du joueur en question
}