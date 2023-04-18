/*var tablacsku = document.getElementById('tablacsku').innerHTML;
console.log(tablacsku)*/

document.getElementById('tablazat').innerHTML = rajzolTabla(5, 6);
//var cellak =document.getElementsByClassName("cella");

function rajzolTabla(sor, oszlop){
    var tablazat = '<table>';
    adatokT = [];
    for (var i = 0; i < sor; i++){
        tablazat += '<tr>'
        adatokT[i] = [];
        for (var j = 0; j < oszlop; j++){
            adatokT[i][j] = 100 - Math.random() + 100;
            tablazat += `<td class ="cella" id="s${i}:o${j}"> $(adatokT[i][j].toFixed(2))</td>`;
        }
        tablazat += '</tr>'

    }
    tablazat += '</table>';
    return tablazat;
}

function sorszinez(sorid, hatter, szin){
    var sor = document.querySelectorAll(sorid);
    for (var i=0 ; i < sor.length; i++){}
}

function oszlopszinez(oszlopid, hatter, szin){

}

for (var i = 0; i<cellak.length; i++)
document.getElementById('tablazat').innerHTML = rajzolTabla(5, 6);



rajzolTabla(5, 6);