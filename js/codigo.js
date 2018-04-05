//3
$(document).ready(function(){
//efectuando accion dando click a base
    $('#base').click(function(){
        //mostrando el div#panel oculto si le damos click a base
        $('#panel').slideDown();
        $(this).height('50px');
    });
    
    //efectuando accion dando click a base
     $('#panel').click(function(){
        //ocultando el div#panel  si le damos click a base tardandose 4 segundos
        $(this).slideUp(4000);
    });
    
    //mostrando el titulo del dicv
    $('#base').click(function(){
       var t =$(this).attr('title');
        $('#panel').html(t);
               
    });
    
});

