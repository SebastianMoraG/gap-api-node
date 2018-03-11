import Debug from 'debug';
import  stores  from '../mocks/stores';
import utils from '../utils/utils';

export default {
    findAll: () => {
        const promise = new Promise ((resolve, reject)=>{
            resolve(stores);
        })
        return promise;
    },
    findById: (id) => {
        const promise = new Promise((resolve, reject) => {
            if (utils.invalidId(    id)) reject({error:"Bad request", code: 400});
            const result = stores.find((store) => store.id == id);
            result ? resolve(result) : reject({error:"Record no found", code: 404});
        })
        return promise;
    }
}
