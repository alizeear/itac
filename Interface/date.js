function date(id){
	var ladate=new Date();
	var jour;
	var mois;
	var nummois;
	var annee;
	var joursem;
	var heure;

	var tab_mois=new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
	var tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
	nummois=ladate.getMonth();
	mois = tab_mois[nummois];
	annee = ladate.getFullYear();
	jour = ladate.getDate();
	joursem=tab_jour[ladate.getDay()];

	 h = ladate.getHours();

        if(h<10)
        {
                h = "0"+h;
        }
        m = ladate.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }

        document.getElementById("date").innerHTML = joursem + " " + jour + " " + mois + " " + annee;
        document.getElementById("heure").innerHTML = h + " : " + m;
       	setTimeout('date("'+id+'");','1000');
        return true;
}

