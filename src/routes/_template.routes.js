import express from 'express';
import controller from '../controllers/_template.controller';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Get all items' });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Get item ${req.params.id}` });
});

router.post('/', (req, res) => {
    res.json({ message: 'Create item' });
});

router.put('/:id', (req, res) => {
    res.json({ message: `Update item ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Delete item ${req.params.id}` });
});

export default router;