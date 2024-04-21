const mongoose = require('mongoose');

const dataModelsSchema = mongoose.Schema({

    timestamp: {
        type: String,
        required: true
    },
    data:
    {
        type: Object,
        required: true
    },
    
});

const dataModels = mongoose.model('dataModels', dataModelsSchema);

module.exports = dataModels;