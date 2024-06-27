const {addEvidence} = require('../controllers/evidence');
const router = require('express').Router();

/*router.get('/', (req,res) => {
    res.send('Hello World from Router')
})*/

router.post('/add-evidence', addEvidence)

module.exports = router