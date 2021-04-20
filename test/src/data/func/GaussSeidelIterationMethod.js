import './css/style.css';

function GaussSeidelIterationMethod() {
    function create_input(n) {
        var inputmatrices = document.getElementById('inputmatrices');
        for (var i = 0; i < n; i++) {
            for (var j = 0; j <= n; j++) {
                var t = document.createElement('INPUT');
                t.setAttribute("type", "text");
                t.setAttribute("id", "a" + i + j);
                t.setAttribute("placeholder", "A" + i + j);
                if (j == n) {
                    t.setAttribute("placeholder", "B" + i);
                }
                inputmatrices.appendChild(t);
            }
            var t = document.createElement('INPUT');
            var br = document.createElement('BR');
            t.setAttribute("type", "text");
            t.setAttribute("id", "x" + i);
            t.setAttribute("placeholder", "X" + i);
            inputmatrices.appendChild(t);
            inputmatrices.appendChild(br);
        }
    }
    function getmatrix() {
        let n = parseInt(document.getElementById("n").value);
        var A = [], X = [];
        for (let i = 0; i < n; i++) {
            A[i] = [];
            X[i] = [];
            X[i][0] = parseFloat(document.getElementById("x" + i).value);
            for (let j = 0; j <= n; j++) {
                A[i][j] = parseFloat(document.getElementById("a" + i + j).value);
            }
        }
        GaussSeidel(A, X, n, 20);
    }

    function GaussSeidel(A, X, n, m) {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                X[j][i + 1] = A[j][n];
                for (let k = 0; k < n; k++) {
                    if (k != j) {
                        X[j][i+1] -= A[j][k] * X[k][i];
                    }
                    
                }
                X[j][i + 1] = X[j][i + 1] / A[j][j];
            }
        }
        console.log(X);
    }

    return (
        <div>
            <section className="app-section" >
                <div className="app-container" >
                    <div className="app-form" >
                        <input type="text" id="n" />
                        <button onClick={() => create_input(parseInt(document.getElementById("n").value))} >Update</button>
                    </div>
                    <div id="inputmatrices" />
                    <button onClick={() => getmatrix()} >Cal</button>
                    <div className="app-content" id="content" />
                </div>
            </section>
        </div>
    );

}

export default GaussSeidelIterationMethod;