import express from 'express';
import logger from './logger.js';
import bodyParser from 'body-parser';
import cors from 'cors';

import RoE from './routes/RoE.js'
import LAE from './routes/LAE.js'
import InE from './routes/InE.js'
import Reg from './routes/Reg.js';

const app = express()
const port = 8080
app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: true }))


app.use('/api/RoE', RoE)
app.use('/api/LAE', LAE)
app.use('/api/InE', InE)
app.use('/api/Reg', Reg)

// app.use('/api/users', router);


app.use(logger)

app.listen(port, 'localhost', () => console.log(`server is running on port ${port}`));
