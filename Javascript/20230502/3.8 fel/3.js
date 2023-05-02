function matri(szam = 5, n = 10, m = 10){
    let mx = []
    for (var i=0; i< n; i++){
        mx[i] =[];
        for (var j=0; j< m; j++){
            mx[i][j] = szam;
        }
    }
    return mx;
}

console.log(matri);
console.log(matri(10));
console.log(matri(9, 5));
console.log(matri(1, 6, 7));


