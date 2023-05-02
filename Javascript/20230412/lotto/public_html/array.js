
document.getElementById('tablazat').innerHTML = tablazatKeszit(9, 10);

function tablazatKeszit(sor, oszlop) {
    var tablazat = "<table>";
    adatokT = [];
    for (var i = 0; i < sor; i++) {
        tablazat += "<tr>";
        adatokT[i] = [];
        for (var j = 0; j < oszlop; j++) {
            adatokT[i][j] = i * 10 + j + 1;
            console.log(i, j, adatokT);
            tablazat += `<td class="cella" id="s${i}o${j}">${adatokT[i][j]}</td>`;
        }
        tablazat += "</tr>";
    }

    tablazat += "</table>";
    return tablazat;
}

function sorszinez(sorid, hatter, szin) {
    sor = document.querySelectorAll(`[id^=${sorid}]`);
    for (var i = 0; i < sor.length; i++) {
        sor[i].style.color = szin;
        sor[i].style.backgroundColor = hatter;
    }
}

function oszlopszinez(oszlopid, hatter, szin) {
    oszlop = document.querySelectorAll(`[id$=${oszlopid}]`);
    for (var j = 0; j < oszlop.length; j++) {
        oszlop[j].style.color = szin;
        oszlop[j].style.backgroundColor = hatter;
    }
}

var cellak = document.getElementsByClassName("cella");

for (var i = 0; i < cellak.length; i++) {
    cellak[i].addEventListener('mouseenter', function () {
        sorszinez((this.id).substring(0, 2), 'yellow', 'red');
        oszlopszinez((this.id).substring(2, 4), 'yellow', 'red');
        this.style.fontWeight = 'bold';
        this.style.color = 'blue';
        this.style.backgroundColor = 'white';
    });

    cellak[i].addEventListener('mouseout', function () {
        sorszinez((this.id).substring(0, 2), '#ffcc99', 'black');
        oszlopszinez((this.id).substring(2, 4), '#ffcc99', 'black');
        this.style.color = 'black';
        this.style.backgroundColor = '#ffcc99';
        this.style.fontWeight = 'normal';
    });

    cellak[i].addEventListener('click', function () {
        let kivalasztott = document.querySelectorAll(`[style$='border: 2px solid red;']`);
        console.log(kivalasztott);
        if(kivalasztott.length < 5 && this.style.borderColor != 'red'){
            this.style.border = 'red solid 2px';
            let lista = document.getElementById('lista');
            elem = document.createElement('li');
            elem.setAttribute('id', this.innerHTML);
            elem.innerText = this.innerHTML;
            lista.appendChild(elem);
        }
        else{
            if (this.style.borderColor != 'red')
            alert('Hiba');
        }
    });

    cellak[i].addEventListener('dblclick', function () {
        if(this.style.borderColor == 'red'){
        this.style.border = 'gray solid 1px';
        let elem = document.getElementById(this.innerHTML);
        lista.removeChild(elem);
    }
    });
}



