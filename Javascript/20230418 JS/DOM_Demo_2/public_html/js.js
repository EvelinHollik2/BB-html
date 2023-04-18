console.dir(document);

console.log(document);
console.log(document.title);
document.title = "Halihó";
console.log(document.links);
console.log(document.links[0].innerText);

document.links[0].innerHTML ="Elte";
document.links[1].style.color ='red';

console.log(document.getElementById("header-title"));
var header = document.getElementById("header-title");
header.style.backgroundColor= "gray";

var elemek = document.getElementsByTagName('li');

console.log(elemek);
console.log(elemek[0]);

elemek[0].innerText = 'kalap';
elemek[1].style.color = 'blue';

var elemekclass = document.getElementsByClassName("list-group-item");
console.log(elemekclass);

var elemek2 = document.querySelector(".list-group-item")
console.log(elemek2);

var elemek3 = document.querySelectorAll(".list-group-item")
console.log(elemek3);

elemek3[3].style.color = "red";

let ht = document.querySelector("#header-title");
ht.innerText ="tesztelek";

