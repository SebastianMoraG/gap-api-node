import express from 'express';
import article  from '../db-api/articles';
import store from '../db-api/stores';
import required from '../middleware/auth';

const app = express.Router();

app.get('/',required, async (req, res) => {
    try {
        const articles = await article.findAll();
        res.status(200).json({
            'success':true,
            'articles': articles,
            'total_elements': articles.length
        });
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred',
            error
        });
    }
});

app.get('/stores/:id',required, async (req, res) =>{
    try {
        let result = await store.findById(req.params.id);
        result = await article.findByStoreName(result.name);
        res.status(200).json({
            'success':true,
            'articles': result,
            'total_elements': result.length
        });
    } catch (error) {
        res.status(error.code).json({
            "error_msg": error.error,
            "error_code": error.code,
            "success": false
        });
    }
})

export default app;
