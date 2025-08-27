import Model from '../models/_template.model';

export const getAll = async (req, res) => {
    const items = await Model.find();

    res.render('pages/home', {
        title: 'Home',
        items,
    });
};

export const getById = (req, res) => {
    res.json({ message: `Get item ${req.params.id}` });
};

export const create = (req, res) => {
    res.json({ message: 'Create item' });
};

export const update = (req, res) => {
    res.json({ message: `Update item ${req.params.id}` });
};

export const remove = (req, res) => {
    res.json({ message: `Delete item ${req.params.id}` });
};