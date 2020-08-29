const express = require('express');
const authMiddleware = require('../middlewares/auth');
const Project = require('../models/Project');
const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try{
        const project = await Project.find();
        res.json(project);
    }catch(err) {
        res.json( { message: err });
    }
});

router.get('/:projectId', async (req, res) => {
    try {
        const project = await Project.findById(req.params.projectId);
        res.json(project);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const project = new Project({
        name: req.body.name,
    });
    try{
        const savedProject = await project.save();
        
        res.json(savedProject);
        
    }catch(err){
        res.json({ message: err });
        
    }
    
});

router.delete('/:projectId', async (req, res) => {
    try {
        const removeProject = await Project.remove({ _id: req.params.projectId });
        res.json(removeProject);
    } catch (err) {
        res.json({ message: err });
    }
});

router.patch('/:projectId', async (req, res) => {
    try {
        const updateProject = await Project.updateOne(
            { _id: req.params.projectId },
            { $set: { name: req.body.name } }
        );
        res.json(updateProject);
    } catch (err) {
        res.json({ message: err })
    }
});


module.exports = app => app.use('/project', router);