import Debug from 'debug';
import  articles  from '../mocks/articles';

export default {
    findAll: () => {
        const promise = new Promise ((resolve, reject)=>{
            resolve(articles);
        })
        return promise;
    },
    findByStoreName: (name) => {
        const promise = new Promise ((resolve, reject)=>{
            const result = articles.filter( article => article["store_name"] == name);
            resolve(result);
        })
        return promise;
    }

}
