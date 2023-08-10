const express = require('express');
const router = express.Router();
const clientSide_Req = require('../controllers/clientSide-API')



//To Create or Add Patient Appointment
router.post('/crt',clientSide_Req.add)

//To Create or Add Reviews
router.post('/rv',clientSide_Req.pushData);

// To get all Reviews
// router.get('/getAll', clientSide_Req.getCls);

//To Find a Reviews by Client ID
router.get('/fn/:id', clientSide_Req.getClsID);

//To Find all Reviews by Client ID
router.get('/revv/:id', clientSide_Req.getRevID);

//To get all doctor status
router.get('/getDoc',clientSide_Req.docStatus)

// // //To delete a reviews
// router.delete('/delete/:id', clientSide_Req.delete);

// // //To update any Reviews
// router.put('/update/:id', clientSide_Req.update);

module.exports = router;