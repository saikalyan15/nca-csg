const EvidenceModel = require("../models/evidenceModel");

exports.addEvidence = async(req,res) => {
    
    const {evidence, cccSubDomain, cccControlNo, expectedEvidence, owner, 
        verifiedEvidence, missingEvidence, acceptanceStatus, comments, artifact} = req.body;

        const evidenceData = EvidenceModel({
            evidence,
            cccSubDomain,
            cccControlNo,
            expectedEvidence,
            owner,
            verifiedEvidence,
            missingEvidence,
            acceptanceStatus, 
            comments,
            artifact
        })

        try {
            //validations
            if(!evidence || !cccSubDomain || !cccControlNo || expectedEvidence){
                return res.status(400).json({message: 'All fields are required'})
            }
            await evidenceData.save()
            res.status(200).json({message: 'Evidence added'})
        } catch (error) {
            res.status(500).json({message: 'Unable to save Evidence'})
        }

        console.log(evidenceData);

}