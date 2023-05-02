function szamol(min, max){
    let eredmeny = max-min;
    return eredmeny * Math.random() + min;
}

for (let i =0; i<1000; i++){
    console.log(szamol(100, 200).toFixed(0))
}