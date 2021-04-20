import { derivative, simplify, evaluate } from 'mathjs';

export const SecantMethod = (req, res) => {
    // console.log("afvsd")
    const { fx, L, R, error } = req.body;
    let x1 = parseFloat(L)
    let x2 = parseFloat(R)
    let e = parseFloat(error)
    let f = (x) => {
        let equation = simplify(fx).toString()
        return evaluate(equation, { x })
    }

    let iterations = [];
    let key = 0;
    let err = 1;

    let xm, x0;
    do {
        x0 = (x1 * f(x2) - x2 * f(x1)) / (f(x2) - f(x1));
        iterations.push({key, x0, x1, x2, err});

        key++;
        x1 = x2;
        x2 = x0;

        if(f(x1) * f(x0)==0){
            break;
        }
        xm = (x1 * f(x2) - x2 * f(x1)) / (f(x2) - f(x1));
        err = Math.abs(xm - x0);
    } while (err >= e);

    res.json({
        Answer: x0,
        Iterations: iterations
    })
}