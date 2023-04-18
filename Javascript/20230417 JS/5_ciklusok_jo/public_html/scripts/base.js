/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function mutat() {
    kezd = parseInt(document.getElementById("kezdeti").value);
    lepes = parseInt(document.getElementById("lepeskoz").value);
    felt = document.getElementById("feltetel").value;
    rel = document.getElementById("rel").value;
    eloj = document.getElementById("elojel").value;


    if (document.getElementById("radiobtn_1").checked === true) {
        valaszt = 1;
    } else if (document.getElementById("radiobtn_2").checked === true) {
        valaszt = 2;
    } else if (document.getElementById("radiobtn_3").checked === true) {
        valaszt = 3;
    } else
        alert("Válasszon ki egy ciklust típust !!!");

    feltetel = kezd + rel + felt;
//    szoveg = feltetel + '\n';

    if (((eval(feltetel)) && (rel == "<" || rel == "<=") && (eloj == "+")) || ((eval(feltetel)) && (rel == ">" || rel == ">=") && (eloj == "-"))) {
        switch (valaszt) {
            case 1:
                szoveg = " i = " + kezd + "; \n\ ";
                szoveg = szoveg + "while ( i " + rel + " " + felt + ") {\n\ ";
                szoveg = szoveg + " document.getElementById(\"eredmeny\").innerHTML  += i + \"<br>\";\n";
                szoveg = szoveg + " i = i " + eloj + " " + lepes + "; \n\ }";
                document.getElementById("kod").value = szoveg;

                break;
            case 2:
                szoveg = " i = " + kezd + "; \n\ ";
                szoveg = szoveg + "do{ \n\ ";
                szoveg = szoveg + " document.getElementById(\"eredmeny\").innerHTML  += i + \"<br>\";\n";
                szoveg = szoveg + "   i = i " + eloj + " " + lepes + "; \n\ }\n\ ";
                szoveg = szoveg + "while ( i " + rel + " " + felt + ") \n\ ";
                document.getElementById("kod").value = szoveg;
                break;
            case 3:
                szoveg = "for ( i = " + kezd + "; i " + rel + " " + felt + "; i = i " + eloj + " " + lepes + "){\n\ ";
                szoveg = szoveg + " document.getElementById(\"eredmeny\").innerHTML  += i + \"<br>\";\n";
                szoveg = szoveg + "}\n"
                document.getElementById("kod").value = szoveg;
                break;
            default:
                break;
        }

    } else {
        alert("Hibás megadás pontosítsa !!!");
        document.getElementById("kod").value = "";
    }


}

function futtat() {
    fkod = document.getElementById("kod").value;
    document.getElementById("eredmeny").innerHTML = "";
    eval(fkod);
}

