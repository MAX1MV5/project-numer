export const CholeskyDecomposition = (req,res) => {
    // const { A } = req.body;

    // let n = A.length, matrix = [], x = [];
    const { A, B } = req.body
    const mA = JSON.parse(A)
    const mB = JSON.parse(B)
    const Amat = []
    let size = mA.length
    let check = false
    let x = [], matrix = []
    for (let i = 0; i < mA.length; i++) {
        if (mA[i].length === size) {
            check = true
            break
        }
    }

    function cholesky(A,n) {
        var L = [], LT = [];
        //set L = 0;
        for(let i = 0; i < n; i++){
            L[i] = [];
            LT[i] = [];
            for(let j = 0; j <= n; j++){
                L[i][j] = 0;
                LT[i][j] = 0;
            }
        }

        for(let i = 0; i < n; i++){
            for(let j = 0; j <= i; j++){
                let sum = 0;
                if(j == i){
                    for(let k = 0; k < j; k++){
                        sum += Math.pow(L[j][k],2);
                    }
                    L[j][j] = Math.sqrt(A[j][j] - sum);
                } else {
                    for(let k = 0; k < j; k++){
                        sum += (L[i][k] * L[j][k]);
                    }
                    L[i][j] = (A[i][j] - sum) / L[j][j];
                }
            }
        }
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                LT[i][j] = L[j][i];
            }
        }
        // console.log(L);
        // console.log(LT);

        var Y = [],X = [];
        for(let i = 0; i < n; i++){
            L[i][n] = A[i][n];
        }
        for(var i = 0; i < n; i++ ){
            Y[i] = L[i][n];
            for(let j = i - 1; j >= 0; j--){
                if(i != j){
                    Y[i] = Y[i] - L[i][j]*Y[j];
                }
            }
            Y[i] = Y[i]/L[i][i];
        }

        for(let i = 0; i < n; i++){
            LT[i][n] = Y[i];
        }
        for(var i = n-1; i >= 0; i-- ){
            X[i] = LT[i][n];
            for(var j = i + 1; j < n; j++){
                if(i != j){
                    X[i] = X[i] - LT[i][j]*X[j];
                }
            }
            X[i] = X[i]/LT[i][i];
        }

        // console.log(L);
        // console.log(LT);
        // console.log(Y);
        // console.log(X);
        x = X;
        matrix.push({A, L, LT, Y, X});

    }
    if (check) {
        for (let s = 0; s < size; s++) {
            Amat[s] = [];
            for (let i = 0; i <= size; i++) {
                Amat[s][i] = mA[s][i]
            }
            Amat[s][size] = mB[s];
        }
        cholesky(Amat,size)
    }
    

    res.json({
        X: x,
        Matrix: matrix
    })
}