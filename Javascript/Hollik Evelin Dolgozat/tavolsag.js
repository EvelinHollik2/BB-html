1.
function elso(PQ){
    let px = -1;
    let py = 4;
    let qx = 3;
    let qy = 7;

    PQ = Math.sqrt((Math.pow(px-qx,2))+(Math.pow(py-qy,2)));
    document.getElementById('eredmeny').innerHTML = PQ;
}

2
function szamol(){
    let px = parseInt(document.getElementById('px').value);
    let py = parseInt(document.getElementById('py').value);
    let qx = parseInt(document.getElementById('qx').value);
    let qy = parseInt(document.getElementById('qy').value);

    PQ = Math.sqrt((Math.pow(px-qx,2))+(Math.pow(py-qy,2)));
    document.getElementById('Megoldas').innerHTML = PQ;
}

3
function tomb(){
    let nev1 = "A";
    let nev2 = "B";
    let nev3 = "C";
    let koor1 = 2;
    let koor2 = 3;
    let koor3 = 1;
    let koor4 = 1;
    let koor5 = -5;
    let koor6 = 8;

    let koord = [nev1 +':'+'['+ koor1 +';'+ koor2 +']'] + [nev2 +':'+'['+ koor3 +';'+ koor4 +']'] + [nev3 +':'+'['+ koor5 +';'+ koor6 +']'];
    document.getElementById('pontok').innerHTML = koord;
    PQ = "AB" + Math.sqrt((Math.pow(koor1-koor2,2))+(Math.pow(koor3-koor4,2))) + 
    "AC" + Math.sqrt((Math.pow(koor1-koor2,2))+(Math.pow(koor5-koor6,2))) +
    "BC" + Math.sqrt((Math.pow(koor3-koor4,2))+(Math.pow(koor5-koor6,2)));
    document.getElementById('tavolsagok').innerHTML = PQ;
}

4
function leghosszabb(){
    
}

5
function kesz(){
    let nev = document.getElementById('nev').value;
    let nev2 = document.getElementById('nev2').value;
    let pont = parseInt(document.getElementById('pont').value);
    let pont2 = parseInt(document.getElementById('pont3').value);
    let pont3 = parseInt(document.getElementById('pont3').value);
    let pont4 = parseInt(document.getElementById('pont4').value);

    let koordinatak = [nev +':'+'['+ pont +';'+ pont2 +']'] + [nev2 +':'+'['+ pont3 +';'+ pont4 +']'];
    document.getElementById('Koordinatak').innerHTML = koordinatak;
    PQ = Math.sqrt((Math.pow(pont-pont2,2))+(Math.pow(pont3-pont4,2)));
    document.getElementById('Hossza').innerHTML = PQ;
    document.getElementById('Legnagyobb').innerHTML = Math.max;
    

}

6
document.getElementById('tablazat').innerHTML = megjelenit(10, 10);
function megjelenit(sor, oszlop){
    let tablazat = "<table>";
    adatokT = [];
    for (let i = 0; i < sor; i++) {
        tablazat += "<tr>";
        adatokT[i] = [];
        for (let j = 0; j < oszlop; j++) {
            adatokT[i][j] = (Math.random()*100).toFixed(3);
            console.log(i, j, adatokT);
            tablazat += `<td class="cella" id="s${i}o${j}">${adatokT[i][j]}</td>`;
        }
        tablazat += "</tr>";
    }

    tablazat += "</table>";
    return tablazat;
}

function szamol_es_bovit(sor, oszlop){
    document.getElementById('tablazat').innerHTML = szamol_es_bovit(11, 11);
    var tablazat = "<table>";
    adatokT = [];
    for (var i = 0; i < sor; i++) {
        tablazat += "<tr>";
        adatokT[i] = [];
        for (var j = 0; j < oszlop; j++) {
            adatokT[i][j] = (Math.random()*100).toFixed(3);
            console.log(i, j, adatokT);
            tablazat += `<td class="cella" id="s${i}o${j}">${adatokT[i][j]}</td>`;
        }
        tablazat += "</tr>";
    }
    tablazat += "</table>";
    return tablazat;
}
