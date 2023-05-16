//1
console.log('1. feladat')
console.log('Heloo világ!')   

//2
console.log('2. feladat')
function fok(F){
    let C;
    C = (F-32) / 1.8;    
    return C;    
}
console.log(fok(132));

//3
console.log('3. feladat')
function szaz(a=20, b=10){
    let k;
    k = a / b;
    return k;
}
console.log(szaz());

//4
console.log('4. feladat')
function szam(a, b, c){

    if(a + b > c && b + c > a && a + c > b){
       return 'Ez háromszög';
    }
    else{
       return 'Ez nem háromszög';
    }
}
console.log(szam(2, 3, 7));

//5
console.log('5. feladat')
function oszt(a, b){
    let c;
    if(c = a / b){
        return `A(z) ${b} osztója az ${a}-nak. Az eredmény: ${c} `
    }
    else{
        return `A(z) ${b} nem osztója az ${a}-nak. Az eredmény :${c} `
    }
}
console.log(oszt(20, 5));

//6
console.log('6. feladat')
function sik(x, y){
    if(x>0 && y>0){
        return 'A(z) I. síknegyedbe tartozik'
    }
    else if(x < 0 && y > 0){
        return 'A(z) II. síknegyedbe tartozik'
    }
    else if(x < 0 && y < 0){
        return 'A(z) III. síknegyedbe tartozik'
    }
    else if(x > 0 && y < 0){
        return 'A(z) IV. síknegyedbe tartozik'
    }
    else {
        return 'Az origon van'
    }
}
console.log(sik(5, -5))

//7
console.log('7. feladat')
function lnko(a, b) {
    if (a < b) {
        let temp = a;
        a = b;
        b = temp;
    }
    let maradek = a % b;
    while (maradek > 0) {
    a = b;
    b = maradek;
    maradek = a % b;
    }
    return b;
}
console.log(lnko(12, 18));  
console.log(lnko(15, 25));  
console.log(lnko(7, 5));  

//8
console.log('8. feladat')
function lkkt(a, b) {
let x = a;
let y = b;
while (x !== y) {
    if (x < y) {
        x += a;
    } else {
       y += b;
    }
    }
    return x;
}
console.log(lkkt(3, 4));
console.log(lkkt(5, 7));
console.log(lkkt(6, 8));

//9
console.log('9. feladat')
//function fakt(n){
//
//}
//console.log(fakt())

//10
console.log('10. feladat')
function mar(a, b){
    if (a <= 0 || b <= 0) {
        return 'nem jó a megadás'
    }
    else{
        while (a >= b) {
            a = a - b;     
        } 
        return a;
    }
}
console.log(mar(100, 10))

//11
console.log('11. feladat')
let t = [3, 5, -2, 8, 10, -7, -8, 6, 8, 89, -100];
let t2 = [-8, 5, -2, 8, 10, -7, -8, 6, 8, 89, -100];

function negkeres(tomb){
    let negativ =[];    
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] < 0) {
            negativ[negativ.length] = {'index': i, 'érték': tomb[i]};
        }
    }
    return negativ;
}
console.log(negkeres(t2));

//12
console.log('12.feladat')
let t3 = [2, 3, 10, 7, 5, 6, 9, 15, 11];

function parossz(tomb){
    let paros = [];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 == 0) {
            paros[paros.length] = {'index': i, 'érték': tomb[i]};
        }
    }
    return paros;
}
console.log(parossz(t3));

//13
console.log('13.feladat')


let t4 = [2, 3, 10, 7, 5, 6, 9, 15, 11, 3, 5, -2, 8, 10, -7, -8, 89, -10];
function szomszed(tomb, szam){
    let ide= [];
    for (let i = 0; i < tomb.length; i++) 
    {
        if (Math.abs(tomb[i]-tomb[i-1])<szam && Math.abs(tomb[i]-tomb[i+1])<szam) 
        {
            ide[ide.lenght] =[i, tomb[i]];
        }
    }
    return ide;
}
console.log(szomszed(t4, 15))