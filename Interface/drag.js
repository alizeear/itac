jQuery().ready(function(){ // on vérifie que la librairie existe
    $(function() {
$('body').hide().fadeIn('slow');


});
  $("img#maison").addClass('bouge');
  $("img#morpion").addClass('bouge');
  $("img#couronne").addClass('bouge');
  // $("img.centredroit").addClass('bouge');
  // $("img.normal").addClass('bouge');

  $("#txtDate").val($.datepicker.formatDate('dd M yy', new Date()));


  $( ".bouge" ).draggable({ // on dit que la div dans td (sans td) est draggable
    containment : "table#content" //Permet de ne pas sortir de la div indiqué
	});

$(".bouge").live('mouseup', function(){
  var id = ($(this).attr('id'));
$( "#drop" ).droppable({ // on dit que le td de table de #content est droppable
  drop: function( event, ui ) {// on fait la fonction
//switch test chaque possibilité et on stock dans une variable le nom de la page
var nom = "test.html";
        switch(true) {
            case (id == "rond"):
                nom = 'test.html';
                break;
            case (id == "meteo"):
                nom = 'test2.html';
                break;
            case (id == "check"):
                nom = 'test3.html';
                break;
            case (id == "symbole"):
                nom = 'test4.html';
                break;
            case (id == "param"):
                nom = 'test.html';
                break;
            case (id == "maison"):
                nom = '../domotique/index.html';
                break;
            case (id == "morpion"):
                nom = '../morpion/index.html';
                break;
            case (id == "couronne"):
                nom = '../quete/index.html';
                break;
            case (id == "rond2"):
                nom = 'test2.html';
                break;
            case (id == "rond3"):
                nom = 'test3.html';
        };
               $("#change").animate({
          borderColor: "#35D52E"
          },2000) // ferme la fonction animate
          	setTimeout(function(){
                	$(location).attr('href',nom);// on récupère le nom de la page avec le chemin
            }, 2000); // ferme la fonction setTimeout
            } // ferme la foction event ui
        }); // ferme la fonction drop
       });
});//ferme la fonction jQuery   