import { derivative, simplify, evaluate } from 'mathjs'

export const NewtonRaphson = (req, res) => {
    const { fx, x0, error } = req.body;
    let x = parseFloat(x0);
    let e = parseFloat(error);
    let f = (x) => {
        let equation = simplify(fx).toString()
        return evaluate(equation, { x })
    }
    let df = (x) => {
        let Fx = simplify(fx).toString();
        let equation = derivative(Fx, 'x').toString();
        return evaluate(equation, { x });
    }

    let iterations = [];
    let iteration = 0;
    let err = 1;

    let Ax;

    while(err > e){
        Ax = f(x) / df(x);
        err = Math.abs(((x - Ax) - x) / (x - Ax));
        x = x - Ax;
        iterations.push({iteration, x, err});
        iteration++;
    }
    res.json({
        Answer: x,
        Iterations: iterations
    })
}