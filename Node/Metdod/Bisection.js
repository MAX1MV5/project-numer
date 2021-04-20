import { derivative, simplify, evaluate } from 'mathjs'

export const Bisection = (req, res) => {
    console.log("srgfjghk")

    const { fx, L, R, error } = req.body
    let xl = parseFloat(L)
    let xr = parseFloat(R)
    let er = 1
    let err
    if (error === null || error === '') {
        err = 0.000001
    } else {
        err = parseFloat(error)
    }
    let xm
    let f = (x) => {
        let equation = simplify(fx).toString()
        return evaluate(equation, { x })
    }
    let ite = []
    let prot = []
    let key = 1
    while (er > err) {
        xm = (xr + xl) / 2
        ite.push({ key, xl, xr, xm, er })
        key++
        prot.push(f(xm))
        if (f(xm) * f(xr) > 0) {
            er = Math.abs((xm - xr) / xm)
            xr = xm
        } else {
            er = Math.abs((xm - xl) / xm)
            xl = xm
        }
    }
    res.json({
        answer: xm,
        iteration: ite,
    })
}
