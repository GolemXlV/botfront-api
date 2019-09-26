const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');

const entity = new Schema(
    {
        start: { type: Number, required: true },
        end: { type: Number, required: true },
        value: { type: String, required: true },
        entity: { type: String, required: true },
        confidence: { type: Number, required: false },
        extractor: { type: String, required: false },
        processors: [{ type: String, required: false }],
    },
    { _id: false },
);

const projects = new Schema({ _id: String }, { strict: false });
const credentials = new Schema({ _id: String }, { strict: false });
const endpoints = new Schema({ _id: String }, { strict: false });
const nlu_models = new Schema({ _id: String }, { strict: false });


const activity = new Schema({
    _id: { type: String, default: shortid.generate },
    modelId: { type: String, required: true },
    text: { type: String, required: true },
    intent: { type: String, required: false },
    entities: { type: [entity], required: false },
    confidence: { type: Number, required: true },
    validated: { type: Boolean, required: false },
    ooS: { type: Boolean, required: false },
    createdAt: { type: Date, required: true, default: Date.now },
    updatedAt: { type: Date, required: true, default: Date.now },
});

exports.Activity = mongoose.model('Activity', activity, 'activity');
exports.NLUModels = mongoose.model('NLUModels', nlu_models, 'nlu_models');
exports.Endpoints = mongoose.model('Endpoints', endpoints, 'endpoints');
exports.Credentials = mongoose.model('Credentials', credentials, 'credentials');
exports.Projects = mongoose.model('Projects', projects, 'projects');