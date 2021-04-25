import GraphicalMethod from './func/GraphicalMethod';
import BisectionMethod from './func/BisectionMethod';
import FalsePositionMethod from './func/FalsePositionMethod';
import OnePointIterationMethod from './func/OnePointIterationMethod';
import NewtonRaphsonMethod from './func/NewtonRaphsonMethod';
import SecantMethod from './func/SecantMethod';


const methods = [
    {
        title: "Bisection Method",
        funcM: <BisectionMethod />
    },
    {
        title: "False-Position Method",
        funcM: <FalsePositionMethod />
    },
    {
        title: "One-Point Iteration Method",
        funcM: <OnePointIterationMethod />
    },
    {
        title: "Newton-Raphson Method",
        funcM: <NewtonRaphsonMethod />
    },
    {
        title: "Secant Method",
        funcM: <SecantMethod />
    }
];

export default methods;