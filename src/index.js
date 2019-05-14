import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import models from './models/index'
import routes from './routes'

import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1],
    };
    next()
})


app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);



app.listen(process.env.PORT, () => console.log('Listening on port ', 3000));
