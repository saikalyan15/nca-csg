const mongoose = require('mongoose')

const EvidenceModel = new mongoose.Schema({
    evidence: {
        type: String,
        required: true,
        trim: true
    },
    cccSubDomain:{
        type: String,
        required: true,
        trim: true
    },
    cccControlNo: {
        type: String,
        required: false,
        trim: true
    },
    expectedEvidence: {
        type: String,
        required: false,
        trim: true
    },
    owner: {
        type: String,
        required: false,
        trim: true
    },
    verifiedEvidence: {
        type: String,
        required: false,
        trim: true
    },
    missingEvidence: {
        type: String,
        required: false,
        trim: true

    },    
    acceptanceStatus: {
        type: String,
        required: false,
        trim: true
    },
    comments: {
        type: String,
        required: false,
        trim: true
    },
    artifact: {
        type: String,
        required: false,
        trim: true
    },

},{timestamps: true}) 

module.exports = mongoose.model('Evidence', EvidenceModel)