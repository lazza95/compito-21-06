var pulsante = document.querySelector("#pulsante");

pulsante.addEventListener("click", flymoney);

let bilancio = 1000;
let metà = true;
let fine = true;

function flymoney(){

    bilancio = bilancio - 100;
    document.getElementById("schermo").innerHTML = bilancio;

    if(bilancio<=500 && metà == true){
        document.getElementById("avvertimento").innerHTML ="Spendi meno";
        metà = false;

    }

     else if(bilancio<=250 && fine == true){
        document.getElementById("avvertimento").innerHTML = "Stai finendo i soldi";
        fine = false;

    }
    else if(bilancio<=0){
        pulsante.disable=true;
        document.getElementById("avvertimento").innerHTML = "Sei povero";
    }
}