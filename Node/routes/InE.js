import express from 'express';
import { LagrangeInterpolationMethod } from '../Metdod/LagrangeInterpolationMethod.js';
import { NewtonsDividedDifferences } from '../Metdod/NewtonsDividedDifferences.js';
import { SplineInterpolation } from '../Metdod/SplineInterpolation.js';

const user_router = express.Router();

user_router.post('/newtons', (req,res) => NewtonsDividedDifferences(req,res));
user_router.post('/lagrange', (req,res) => LagrangeInterpolationMethod(req,res));
user_router.post('/spline', (req,res) => SplineInterpolation(req,res));

export default user_router;