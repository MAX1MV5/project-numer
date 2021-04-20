const Lagrange = (data, want, A) => {
    const memdiv = []
    var result = 0,
        mul = 0,
        div = 0,
        L = 1;
    const RangeEqWa = [];
    for (let i = 0; i < data.length; i++) {
        let sub = [];
        for (let j = 0; j < data.length; j++) {
            sub.push(data[j][0] - data[i][0]);
        }
        memdiv.push(sub);
        RangeEqWa.push(data[i][0] - want);
    }
    if (A.length === 2) {
        console.log("Linear Interpolation: ");
    } else if (A.length === 3) {
        console.log("Quadratic Interpolation: ");
    } else {
        console.log("Polynomial Interpolation: ");
    }
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (j === i) {
                continue;
            }
            mul = RangeEqWa[A[j]];
            div = memdiv[A[i]][A[j]];
            L = L * (mul / div);
        }
        result += L * data[A[i]][1];
        L = 1;
    }
    return result;
};
const data = [
    [0, 9.81],
    [20000, 9.7478],
    [40000, 9.6879],
    [60000, 9.6879],
    [80000, 9.5682],
];
const
    linear = [0, 4],
    quad = [0, 2, 4],
    poly = [0, 1, 2, 3, 4];
const want = 42000;
console.log(Lagrange(data, want, linear));
console.log(Lagrange(data, want, quad));
console.log(Lagrange(data, want, poly));