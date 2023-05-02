function faktorialis(n){
    let eredmeny = 1;
    for(let i = 2; i <=n; i++){
        eredmeny *= i;
    }
    return eredmeny;
}