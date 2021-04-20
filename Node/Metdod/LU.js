export const LU = (req,res) => {
    // const { A } = req.body;
    // let n = A.length, ans = [], x = [];
    const { A, B } = req.body
    const mA = JSON.parse(A)
    const mB = JSON.parse(B)
    const Amat = []
    let size = mA.length
    let check = false
    let x = [], ans = []
    for (let i = 0; i < mA.length; i++) {
        if (mA[i].length === size) {
            check = true
            break
        }
    }

    function luDecomposition(A,n) {
        var L = [], U = [];
        for(let i = 0; i < n; i++){
            L[i] = [];
            U[i] = [];
            for(let j = 0; j <= n; j++){
                L[i][j] = 0;
                U[i][j] = 0;
            }
        }
        for(let i = 0; i < n; i++){
            for(let k = i; k < n; k++){
                let sum = 0;
                for(let j = 0; j < i; j++){
                    sum += (L[i][j] * U[j][k]);
                }
                U[i][k] = A[i][k] - sum;
            }
            for(let k = i; k < n; k++){
                if(i == k)
                    L[i][i] = 1;
                else{
                    let sum = 0;
                    for(let j = 0; j < i; j++){
                        sum += (L[k][j] * U[j][i]);
                    }
                    L[k][i] = (A[k][i] - sum) / U[i][i];
                }
            }
        }
        var Y = [],X = [];
        for(let i = 0; i < n; i++){
            L[i][n] = A[i][n];
        }
        // console.log(L);
        for(var i = 0; i < n; i++ ){
            Y[i] = L[i][n];
            for(let j = i - 1; j >= 0; j--){
                if(i != j){
                    Y[i] = Y[i] - L[i][j]*Y[j];
                }
            }
        }
        // console.log(Y);
        for(let i = 0; i < n; i++){
            U[i][n] = Y[i];
        }
        for(var i = n-1; i >= 0; i-- ){
            X[i] = U[i][n];
            for(var j = i + 1; j < n; j++){
                if(i != j){
                    X[i] = X[i] - U[i][j]*X[j];
                }
            }
            X[i] = X[i]/U[i][i];
        }
        // console.log(A);
        // console.log(L);
        // console.log(U);
        // console.log(Y);
        // console.log(X);
        x = X;
        ans.push({A, L, U, X})
    }
    if (check) {
        for (let s = 0; s < size; s++) {
            Amat[s] = [];
            for (let i = 0; i <= size; i++) {
                Amat[s][i] = mA[s][i]
            }
            Amat[s][size] = mB[s];
        }
        luDecomposition(Amat,size);
    }
    

    res.json({
        X: x,
        Matrix: ans
    })
}