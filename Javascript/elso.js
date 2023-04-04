function hiba(){
    alert("Ez Itt Egy Figyelmeztetés!")
}

document.write("Ez itt egy külső jó állomány!")

function kerdezget(){
    valasz = confirm("Akarsz megadni nevet?")
    console.log(valasz);
    if(valasz){
        nev= prompt("Kérem a nevet:");
        alert("Szia "+nev+"!")
    }
    else{
        alert("Szia névtelen!")
    }
}
var a =1;
var b=3;

function osszead(a,b){
    a=4;
    b=5;
    console.log(a+b)
    return a+b;
}

function osszead2(){
    console.log(a+b)
    return a+b;
}
osszead2();
osszead(5,6);