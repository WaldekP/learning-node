import express from 'express';
import 'dotenv/config';

import cors from 'cors';

const app = express();

app.use(cors());

app.get('/data', (req, res) => res.send({message: 'Cos'}));
app.listen(process.env.PORT, () => console.log('Listening on port ', 3000));
