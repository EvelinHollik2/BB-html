function szamol(){

    let szam=parseInt(document.getElementById("szam").value)
    let szam2=parseInt(document.getElementById("szam2").value)
    let szam3=parseInt(document.getElementById("szam3").value)
    let ertek = "";

    if (szam >= szam2 && szam <= szam3){
       ertek = "igaz"
    }
    else{
        ertek = "Hamis"
    }
    
document.getElementById('szamol').innerHTML = ertek;
        
}


