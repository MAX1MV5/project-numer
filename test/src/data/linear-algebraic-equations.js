import CholeskyDecompositionMethod from "./func/CholeskyDecompositionMethod";
import ConjugateGradientMethod from "./func/ConjugateGradientMethod";
import CramersRule from "./func/CramersRule";
import GaussEliminationMethod from "./func/GaussEliminationMethod";
import GaussJordanMethod from "./func/GaussJordanMethod";
import GaussSeidelIterationMethod from "./func/GaussSeidelIterationMethod";
import JacobiIterationMethod from "./func/JacobiIterationMethod";
import LUDecompositionMethod from "./func/LUDecompositionMethod";

const LAEmethods = [
    {
        title: "Cramer's Rule",
        funcM: <CramersRule />
    },
    {
        title: "Gauss Elimination Method",
        funcM: <GaussEliminationMethod />
    },
    {
        title: "Gauss-Jordan Method",
        funcM: <GaussJordanMethod />
    },
    {
        title: "LU Decomposition Method",
        funcM: <LUDecompositionMethod />
    },
    {
        title: "Cholesky Decomposition Method",
        funcM: <CholeskyDecompositionMethod />
    },
    {
        title: "Jacobi Iteration Method",
        funcM: <JacobiIterationMethod />
    },
    {
        title: "Gauss-Seidel Iteration Method",
        funcM: <GaussSeidelIterationMethod />
    },
    {
        title: "Conjugate Gradient Method",
        funcM: <ConjugateGradientMethod />

    }
];

export default LAEmethods;