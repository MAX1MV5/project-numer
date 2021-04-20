

export const LagrangeInterpolationMethod = (req, res) => {
    const { Y, X, V } = req.body
    const mX = JSON.parse(X)
    const mY = JSON.parse(Y)
    const value = parseFloat(V)
    let n = mX.length

    let yp = 0

    for(let i = 0; i < n; i++){
        let p = 1
        for(let j = 0; j < n; j++){
            if(i != j){
                p = p * (value - mX[j])/(mX[i] - mX[j])
            }
        }
        yp = yp + p * mY[i]
    }

    res.json({
        ans: yp
    })

}