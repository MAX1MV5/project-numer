export const GaussJordan = (req, res) => {

    const { A, B } = req.body
    const mA = JSON.parse(A)
    const mB = JSON.parse(B)
    const Amat = []
    let size = mA.length
    let check = false
    let x = []
    for (let i = 0; i < mA.length; i++) {
        if (mA[i].length === size) {
            check = true
            break
        }
    }

    function PerformOperation(A, n) {
        let i, j, k = 0, c, flag = 0, temp, pro = 0.0;
        for (i = 0; i < n; i++) {
            if (A[i][i] == 0) {
                c = 1;
                while ((i + c) < n && A[i + c][i] == 0) {
                    c++;
                }
                if ((i + c) == n) {
                    flag = 1;
                    break;
                }
                for (j = i, k = 0; k <= n; k++) {
                    temp = A[j][k];
                    A[j][k] = A[j + c][k];
                    A[j + c][k] = temp;
                }
            }
            for (j = 0; j < n; j++) {
                if (i != j) {
                    pro = A[j][i] / A[i][i];
                    for (k = 0; k <= n; k++) {
                        A[j][k] = A[j][k] - (A[i][k]) * pro;
                    }
                }
            }
        }
        return flag;
    }
    function PrintResult(A, n, flag) {
        if (flag == 2)
            console.log("Infinite Solutions Exists");
        else if (flag == 3)
            console.log("No Solution Exists");
        else {
            var X = [];
            for (let i = 0; i < n; i++) {
                X[i] = A[i][n] / A[i][i];
            }
        }
        return (X);
    }
    function CheckConsistency(A, n, flag) {
        var i, j, sum;
        flag = 3;
        for (i = 0; i < n; i++) {
            sum = 0.0;
            for (j = 0; j < n; j++)
                sum = sum + A[i][j];
            if (sum == A[i][j])
                flag = 2;
        }
        return flag;
    }

    if (check) {
        for (let s = 0; s < size; s++) {
            Amat[s] = [];
            for (let i = 0; i <= size; i++) {
                Amat[s][i] = mA[s][i]
            }
            Amat[s][size] = mB[s];
        }
        // console.log(Amat[0][size]+Amat[1][size])
        let flag = 0;
        flag = PerformOperation(Amat, size);
        if (flag == 1) {
            flag = CheckConsistency(Amat, size, flag);
        }
        x = PrintResult(Amat, size, flag);
    }

    res.json({
        X: x
    })
}