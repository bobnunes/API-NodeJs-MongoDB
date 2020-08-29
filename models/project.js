const mongoose = require('../database/db');
const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        require: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

ProjectSchema.pre('save', async function(next) {
    next();
})

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;