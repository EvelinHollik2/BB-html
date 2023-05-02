function darab(tomb, x) {
    let darab = 0;
    for (let elem of tomb) {
        if (elem === x) {
            darab++;
        }
    }
    return darab;
}
    // vagy
function darab(tomb, x) {
    return tomb.filter(elem => elem === x).length;
}
    