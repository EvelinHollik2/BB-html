/*var tablacsku = document.getElementById('tablacsku').innerHTML;
console.log(tablacsku)*/

function rajzolTabla(sor, oszlop){
    var tablazat = '<table>';
    for (var i = 0; i < sor; i++){
        tablazat += '<tr>'
        for (var j = 0; j < oszlop; j++){
            tablazat += `<td> ${i}:${j}</td>`;
        }
        tablazat += '</tr>'

    }
    tablazat += '</table>';
    document.getElementById('tablacsku').innerHTML = tablazat;
    //console.log(tablazat);
}

rajzolTabla(5, 6);