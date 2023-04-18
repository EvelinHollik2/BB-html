function szamol()

{

var toke = parseInt(document.getElementById('toke').value);
var kamatlabmin = parseFloat(document.getElementById('kamatlabmin').value);
var kamatlabmax = parseFloat(document.getElementById('kamatlabmax').value);
var evek = parseFloat(document.getElementById('evek').value);
eredmeny ="";
console.log(toke,kamatlabmin,kamatlabmax,evek);

eredmeny = "<table><tr><th>Évek</th>"
for (var k = kamatlabmin; k < kamatlabmax + 1; k++){
    eredmeny += '<th>' + k + '</th>';
}
eredmeny += '</tr>';
for (var i = 0; i < evek + 1; i++)
    eredmeny += '<tr><th>' + i +'.</th>'
for (var j = kamatlabmin; j < kamatlabmax + 1; j++)
{
    eredmeny =+ '<tr>'
    console.log(q);
    var q = 1 + j / 100;
    for (var i = 0; i < evek; i++) {
        var token = toke * Math.pow(q,i);
        eredmeny += '<td>' + token.toFixed(2) + '</td>';
    }
    eredmeny += '</tr>';
}
eredmeny += '</table>';
document.getElementById('eredmény').innerHTML += eredmeny; 

}