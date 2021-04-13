document.addEventListener('DOMContentLoaded' , function(){
const title = document.getElementById('titulo');
var opcion1 = document.getElementById('inlineRadio1');
var opcion2 = document.getElementById('inlineRadio2');
const alert1 = document.getElementById('alert1');
const alertinfo = document.getElementById('alertinfo');
const img = document.getElementById('img');
const btn = document.getElementById('button-addon2');
var alertyellow = document.getElementById('alertyellow');


    opcion1.addEventListener('change', function(){
    if(this.checked){
        function buttonaddon1Name(){
            if (title.value === ''){
                console.error('error');
                alert1.classList.remove('d-none');
                img.classList.add('d-none');
                alertyellow.classList.add('d-none')
                return
            } else {
                console.log('ok');
                alert1.classList.add('d-none');
                img.classList.add('d-none');
                console.log('opcion1 is selected')
                alertyellow.classList.remove('d-none')
                alertinfo.classList.add('d-none')
               
                    var text = document.createTextNode("Hola " + title.value + " Esto es una alerta color Amarillo");                                    
                    document.getElementById("alertyellow").appendChild(text);

                    var text = document.createTextNode("");                                    
                    document.getElementById("alertinfo").appendChild(text);
            }
        }
        
        btn.onclick = buttonaddon1Name;
    }
    });

    opcion2.addEventListener('change', function(){
    if(this.checked){
        function buttonaddon2Name(){
            if (title.value === ''){
                console.error('error');
                alert1.classList.remove('d-none');
                img.classList.add('d-none');
                alertinfo.classList.add('d-none')
            } else {
                console.log('ok');
                alert1.classList.add('d-none');
                img.classList.add('d-none');
                console.log('opcion2 is selected')
                alertyellow.classList.add('d-none')
                alertinfo.classList.remove('d-none')

                    var text1 = document.createTextNode("Hola " +title.value + " Esto es una alerta color Azul");                                    
                    document.getElementById("alertinfo").appendChild(text1);

            }
        }
        btn.onclick = buttonaddon2Name;
    }
    });

});