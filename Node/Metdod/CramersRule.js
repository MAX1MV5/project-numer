import { det, round } from 'mathjs'

export const CramersRule = (req, res) => {
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
    if (check) {
        for (let s = 0; s < size; s++) {
            let temp = []
            for (let i = 0; i < size; i++) {
                let temp1 = []
                for (let j = 0; j < size; j++) {
                    if (j === s) {
                        temp1.push(mB[i])
                    } else {
                        temp1.push(mA[i][j])
                    }
                    if (j === size - 1) {
                        temp.push(temp1)
                    }
                }
                if (i === size - 1) {
                    Amat.push(temp)
                }
            }
        }
        for (let i = 0; i < size; i++) {
            let t = det(Amat[i]) / det(mA)
            x.push(t)
        }
    }
    res.json({
        X: round(x),
    })
}
