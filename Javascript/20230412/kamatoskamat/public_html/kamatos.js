function szamol() {
    var toke = parseInt(document.getElementById('toke').value);
    var kamatmin = parseFloat(document.getElementById('kamatmin').value);
    var kamatmax = parseFloat(document.getElementById('kamatmax').value);
    var evek = parseInt(document.getElementById('evek').value);

//    eredmeny = "<table>";
//    for (var j = kamatmin; j < kamatmax + 1; j++) {
//        eredmeny += '<tr>';
//        var q = 1 + j / 100;
//        for (var i = 0; i < evek + 1; i++) {
//            token = toke * Math.pow(q, i);
//            eredmeny += '<td>' + token.toFixed(2) + '</td>';
//        }
//        eredmeny += '</tr>';
//    }
//    eredmeny += '</table>';

//    eredmeny = "<table>";
//    for (var i = 0; i < evek + 1; i++) {
//        eredmeny += '<tr>';
//        for (var j = kamatmin; j < kamatmax + 1; j++) {
//            var q = 1 + j / 100;
//            token = toke * Math.pow(q, i);
//            eredmeny += '<td>' + token.toFixed(2) + '</td>';
//        }
//        eredmeny += '</tr>';
//    }
//    eredmeny += '</table>';
//    //console.log(eredmeny);

    eredmeny = "<table><tr><th>Évek</th>"; 
    for (let k = kamatmin; k < kamatmax + 1; k++) {
        eredmeny += '<th>' + k + '%</th>';
    }
    eredmeny += '</tr>';
    //évek ciklusa. Ez számolja az éveket
    for (let i = 0; i < evek + 1; i++) {
        eredmeny += '<tr><th>' + i + '.</th>';
        for (let j = kamatmin; j < kamatmax + 1; j++) {
            let q = 1 + j / 100;
            token = toke * Math.pow(q, i);
            eredmeny += '<td>' + token.toFixed(2) + '</td>';
        }
        eredmeny += '</tr>';
    }
    eredmeny += '</table>';
    console.log(eredmeny);

    document.getElementById('eredmeny').innerHTML = eredmeny;
}

//const ertek = parseInt(document.getElementById('toke').value);
//let ertek2 = 45454545;
//document.getElementById('toke').value = ertek2;

//console.log(ertek);

//let div1 = document.getElementById('elso').innerHTML;
//let div2 = document.getElementById('elso').outerHTML;
//console.log(div1);

//document.getElementById('elso').innerHTML = ""; //meg változtatjuk a div1-et
//document.getElementById('elso').outerHTML = ""; //meg változtatjuk a div1-et

let beviteli = document.getElementsByTagName('input');
console.log(beviteli);
for (let i = 0; i < beviteli + 1; i++) 
{
    beviteli[1].value = i;
}
console.log(beviteli[0].className);

let urlapelemek = document.getElementsByClassName('urlap');
console.log(urlapelemek);
urlapelemek[0].style.backgroundColor = 'pink';
urlapelemek[2].style.backgroundColor = 'pink';

let elemek = document.getElementsByTagName('td');



let newdiv = document.createElement('div');
elemek.appendChild(newdiv);

let felsorol= document.createElement('ul');
newdiv.appendChild(felsorol);

for(var i = 0; i<6; i++);{
    let elem = document.createElement('li');
    let elemszoveg= document.createTextNode('s' + i);
    elem.innerText = 'elem' + i;
    felsorol.appendChild('elem');    
}