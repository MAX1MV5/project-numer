import express from 'express';
import { CholeskyDecomposition } from '../Metdod/CholeskyDecomposition.js';
import { ConjugateGradient } from '../Metdod/ConjugateGradient.js';
import { CramersRule } from '../Metdod/CramersRule.js';
import { GaussElimination } from '../Metdod/GaussElimination.js';
import { GaussJordan } from '../Metdod/GaussJordan.js';
import { JacobiIteration } from '../Metdod/JacobiIteration.js';
import { LU } from '../Metdod/LU.js';

const user_router = express.Router();

user_router.post('/creamers', (req,res) => CramersRule(req,res));
user_router.post('/qausselimination', (req,res) => GaussElimination(req,res));
user_router.post('/gaussjordan', (req,res) => GaussJordan(req,res));
user_router.post('/lu', (req,res) => LU(req,res));
user_router.post('/cholesky', (req,res) => CholeskyDecomposition(req,res));
user_router.post('/jacobi', (req,res) => JacobiIteration(req,res));

user_router.post('/conjugate', (req,res) => ConjugateGradient(req,res));

export default user_router;