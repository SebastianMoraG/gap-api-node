import express from 'express';
import store  from '../db-api/stores';
import required from '../middleware/auth';

const app = express.Router();

app.get('/',required, async (req, res) => {
    try {
        const stores = await store.findAll();
        res.status(200).json({
            'success':true,
            'stores': stores,
            'total_elements': stores.length
        });
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred',
            error
        });
    }
});

export default app;
