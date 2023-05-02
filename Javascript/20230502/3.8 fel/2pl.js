const matrix = [
    [1, 3, 3],
    [1, 1, 2],
    [3, 2, 2]
];
const darabok = {
    "1": 0,
    "2": 0,
    "3": 0
};
for (let sor of matrix) {
    for (let ertek of matrix) {
        darabok[ertek] += 1;
    }
};