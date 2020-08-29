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

router.post('/add', async (req, res) => {
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

module.exports = app => app.use('/project', router);