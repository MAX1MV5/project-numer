import { derivative, simplify, evaluate } from 'mathjs'

export const FalsePosition = (req, res) => {
    const { fx, L, R, error} = req.body;
    let xl = parseFloat(L)
    let xr = parseFloat(R)
    let e = parseFloat(error)
    let f = (x) => {
        let equation = simplify(fx).toString()
        return evaluate(equation, { x })
    }

    let iterations = [];
    let key = 0;
    let err = 1;

    if (f(xl) * f(xr) >= 0) {
        console.log("You have not assumed right xl and xr");
        return;
    }
    var x1;
    //step 4
    while (err >= e) {
        //step 1
        x1 = ((xl * f(xr)) - (xr * f(xl))) / (f(xr) - f(xl));
        iterations.push({key, xl, xr, x1, err});
        key++;
        if (f(x1) == 0) {
            break;
        }
        //step 2-3
        else if (f(x1) * f(xr) < 0) {
            err = Math.abs((x1 - xl) / x1)
            xl = x1;
        }
        else {
            err = Math.abs((x1 - xr) / x1)
            xr = x1;
        }
        // console.log(x1);
    }
    res.json({
        Answer: x1,
        Iterations: iterations
    })

}