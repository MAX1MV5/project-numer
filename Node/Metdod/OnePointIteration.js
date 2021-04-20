import { derivative, simplify, evaluate } from 'mathjs'

export const OnePointIteration = (req, res) => {
    const { fx, X0, error} = req.body;
    let x0 = parseFloat(X0)
    let e = parseFloat(error)
    let g = (x) => {
        let equation = simplify(fx).toString()
        return evaluate(equation, { x })
    }
    console.log(fx + ": "+ e+": "+x0)

    let iterations = [];
    let key = 0;
    let err = 1;
    let x1

    do {
        x1 = g(x0);
        err = Math.abs((x1 - x0) / x1)
        iterations.push({key,x0,x1,err})
        x0 = x1
        key++
        console.log(g(x1)-x1)
        if(err < e){
            break;
        }
    } while (true);

    res.json({
        Answer: x1,
        Iterations: iterations
    })
}