import Debug from 'debug';
import auth from 'basic-auth';
import compare from 'tsscmp';

const debug = new Debug('node-mean:auth');

function check (name, pass) {
    var valid = true;
    valid = compare(name, 'admin') && valid;
    valid = compare(pass, 'admin') && valid;
  
    return valid;
  }

const required = (req, res, next) => {
    var credentials = auth(req)
    if (!credentials || !check(credentials.name, credentials.pass)) {
        res.statusCode = 401
        res.setHeader('WWW-Authenticate', 'Basic realm="example"')
        res.end('Access denied')
    } else {
        next();
    }
}

export default required