import { Route, BrowserRouter } from 'react-router-dom';

import BisectionMethod from '../data/func/BisectionMethod'
import CholeskyDecompositionMethod from '../data/func/CholeskyDecompositionMethod';
import ConjugateGradientMethod from '../data/func/ConjugateGradientMethod';
import CramersRule from '../data/func/CramersRule';
import FalsePositionMethod from '../data/func/FalsePositionMethod';
import GaussEliminationMethod from '../data/func/GaussEliminationMethod';
import GaussJordanMethod from '../data/func/GaussJordanMethod';
import GaussSeidelIterationMethod from '../data/func/GaussSeidelIterationMethod';
import JacobiIterationMethod from '../data/func/JacobiIterationMethod';
import LagrangePolynomials from '../data/func/LagrangePolynomials';
import LUDecompositionMethod from '../data/func/LUDecompositionMethod';
import NewtonRaphsonMethod from '../data/func/NewtonRaphsonMethod';
import NewtonsDividedDifferences from '../data/func/NewtonsDividedDifferences';
import OnePointIterationMethod from '../data/func/OnePointIterationMethod';
import SecantMethod from '../data/func/SecantMethod';
import SplineInterpolation from '../data/func/SplineInterpolation';
// import { Router, Route, Link, browserHistory, IndexRoute } from 


function Content() {
    return (
        <BrowserRouter>
            <Route path="/RoE" >
                <Route path="/RoE/Bisection" component={BisectionMethod} />
                <Route path="/RoE/False-Position" component={FalsePositionMethod} />
                <Route path="/RoE/One-Point" component={OnePointIterationMethod} />
                <Route path="/RoE/Newton-Raphson" component={NewtonRaphsonMethod} />
                <Route path="/RoE/Secant" component={SecantMethod} />
            </Route>
            <Route path="/LAE" >
                <Route path="/LAE/Cramer" component={CramersRule} />
                <Route path="/LAE/Gauss-Elimination" component={GaussEliminationMethod} />
                <Route path="/LAE/Gauss-Jordan" component={GaussJordanMethod} />
                <Route path="/LAE/LU" component={LUDecompositionMethod} />
                <Route path="/LAE/Cholesky" component={CholeskyDecompositionMethod} />
                <Route path="/LAE/Jacobi" component={JacobiIterationMethod} />
                <Route path="/LAE/Gauss-Seidel" component={GaussSeidelIterationMethod} />
                <Route path="/LAE/Conjugate" component={ConjugateGradientMethod} />
            </Route>
            <Route path="/InE" >
                <Route path="/InE/Newton" component={NewtonsDividedDifferences} />
                <Route path="/InE/Lagrange" component={LagrangePolynomials} />
                <Route path="/InE/Spline" component={SplineInterpolation} />
            </Route>
        </BrowserRouter>
    )

}

export default Content;