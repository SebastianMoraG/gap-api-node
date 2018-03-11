import Debug from 'debug';
import app from './app';

const PORT = 3000;
const debug = new Debug('node-mean:root');


function start(){
    app.listen(PORT, () => {
        debug("server running...");
    });
}

start();