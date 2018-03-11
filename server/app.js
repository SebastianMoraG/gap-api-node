import express from 'express';
import bodyParser from 'body-parser';
import articles from './routes/articles';
import stores from './routes/stores';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

if(process.env.NODE_ENV === 'development'){
    app.use((req,res,next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
        next();
    });
};

app.use('/service/articles', articles);
app.use('/service/stores', stores)

export default app;