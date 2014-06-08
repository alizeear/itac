jQuery().ready(function(){ // on vérifie que la librairie existe
$("div#content").addClass('bougepas');
$("div#div1").addClass('bougepas');
$("div#div2").addClass('bougepas');
$("div#div3").addClass('bougepas');
$("div#div4").addClass('bougepas');
$("div#div5").addClass('bougepas');


$( "div" ).not(".bougepas").draggable({ 
containment : "div#content" //Permet de ne pas sortir de la div indiqué
	});

	 $( "#aumilieu" ).droppable({ // on dit que le td de table de #content est droppable
            drop: function( event, ui ) {// on fait la fonction
                $( this )// on applique a l'élément du dessus
                    .find( "span" )//on cherche le span
                        .html( "Bravo ! maintenant récupères-en une !" );// et au p on effectue un changement html
            }
        });

});