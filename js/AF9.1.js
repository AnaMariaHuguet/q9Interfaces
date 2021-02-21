// write here the optimal jQuery code as required in the statemens
$(document).ready(function () {
   

////////////// boton navegador hace desaparecer una seccion///////////////////

    $("nav button").on("click", function(){
        let nombreCiudad = $(this).text();
        $("h2:contains('"+nombreCiudad+"')").parent().slideToggle("slow");    
    });

/////////////////situacion celda impar aparece la capa//////////////////

    $("section:nth-child(odd)").hover(function(){
        $(this).children("div").fadeIn("5000", "linear");
       },function(){$(this).children("div").fadeOut("slow");
    });
    
/////////////////clickando celda para aparecer la capa/////////////////

        $("section:nth-child(even)").on("dblclick", function(){           
            //$(this).children("div").fadeTo("slow",0.5);
            $(this).children("div").fadeIn("5000", "linear");
          });

/////////////////clickando en el aspa desaparece la capa//////////////////
     
    $("div>button").on("click", function(){
         $(this).parent().fadeOut();
    });
    
    
    
});
 
 

 
 
 