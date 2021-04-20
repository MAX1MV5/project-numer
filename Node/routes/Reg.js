import express from 'express';
import { lin, multi, poly } from '../Metdod/Regression.js';

const user_router = express.Router();
user_router.post('/lin', (req,res) => lin(req,res));
user_router.post('/poly', (req,res) => poly(req,res));
user_router.post('/multi', (req,res) => multi(req,res));

export default user_router;