import Spline from 'cubic-spline'

export const SplineInterpolation = (req, res) => {
    const { Y, X, V } = req.body
    const mX = JSON.parse(X)
    const mY = JSON.parse(Y)
    const value = parseFloat(V)

    let spline = new Spline(mX, mY)
    let ans = spline.at(value)

    res.json({
        ans: ans
    })


}