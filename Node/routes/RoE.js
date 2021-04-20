import express from 'express';
import { Bisection } from '../Metdod/Bisection.js';
import { FalsePosition } from '../Metdod/FalsePosition.js';
import { NewtonRaphson } from '../Metdod/NewtonRaphson.js';
import { OnePointIteration } from '../Metdod/OnePointIteration.js';
import { SecantMethod } from '../Metdod/SecantMethod.js';

const user_router = express.Router();

user_router.post('/bisection', (req, res) => Bisection(req, res));
user_router.post('/falseposition', (req,res) => FalsePosition(req,res));
user_router.post('/onepoint', (req,res) => OnePointIteration(req,res));
user_router.post('/newton', (req,res) => NewtonRaphson(req,res));
user_router.post('/secant', (req,res) => SecantMethod(req,res));

export default user_router;