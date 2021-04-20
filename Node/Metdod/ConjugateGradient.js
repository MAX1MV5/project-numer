import { round, multiply, transpose } from 'mathjs'
import pcg from 'conjugate-gradient'
import { fromDense } from 'csr-matrix'

export const ConjugateGradient = (req, res) => {
    const { A, B, X } = req.body
    let mA = JSON.parse(A)
    let mB = JSON.parse(B)
    if (JSON.stringify(mA) != JSON.stringify(transpose(mA))) {
        mB = multiply(transpose(mA), mB)
        mA = multiply(transpose(mA), mA)
    }
    let MatA = fromDense(mA)
    let x0 = JSON.parse(X)
    let result = pcg(MatA, mB, x0, 1e-5, 100)
    res.json({
        X: round(result)
    })
}