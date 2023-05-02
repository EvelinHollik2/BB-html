function vizsgal(szam, min, max){
    return(szam >= min && szam <= max);
}

function matri(szam = 5, n = 10, m = 10){
    let mx = []
    for (var i = 0; i < n; i++){
        mx[i] =[];
        for (var j = 0; j<  m; j++){
            mx[i][j] = szam;
        }
    }
    return mx;
}

function inc_mx(mx, x, y){
    for (var i = 1; i < x; i++){
        mx[i] = [];
        for (var j = 2; j < y; j++){
            mx[i][j] = inc_mx;
        }
    }
    return mx;
}
console.log(inc_mx(matri(1, 5, 5), 2, 4));