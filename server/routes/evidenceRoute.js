const {addEvidence, getEvidences, deleteEvidence } = require('../controllers/evidence');

const router = require('express').Router();

/*router.get('/', (req,res) => {
    res.send('Hello World from Router')
})*/

router.post('/add-evidence', addEvidence)
    .get('/get-evidences', getEvidences)
    .delete('/delete-evidence/:id', deleteEvidence)

module.exports = router