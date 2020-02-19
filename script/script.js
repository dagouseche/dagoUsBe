
// var silla = new Array({

//     idSilla: "",
//     apartada: false,
//     vendido: false,
//     cliente:"",

// });



function sumar(){
     silla = document.cinema['silla'];     
     totalSeleccionados = silla.length;
     total = 0;
     for( i=0; i<totalSeleccionados; i++){ 
         if( silla[i].checked == true ){
             valor = silla[i].value;        
             total = total + parseInt(valor) * 7000 ;
         }
     }
     document.getElementById('resultado').innerHTML = 'Precio: $ '+ total; 
}

function mostrar(){
    document.getElementById("mostrarDatos").style.display ="block";
}












