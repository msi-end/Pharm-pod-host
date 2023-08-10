const express = require('express');
const router = express.Router();
const crudModel = require('../controllers/crud-API.js')




router.get('/getAll',crudModel.getAll)
//To get all apply Req data
router.get('/apReq',crudModel.apReq)
//To get doctor details 
router.get('/getDoc',crudModel.getDoc)
router.post('/setDoc',crudModel.setDoc)


//To Create or Add by Patient
router.post('/crt', crudModel.create);
// To get all patient by date
router.get('/getAlldt', crudModel.getAll_date);
// //To Find a patient
router.get('/fnO/:id', crudModel.findOne);
// //To update any patient
router.put('/upd/:id', crudModel.update);
// //To update any Settings
router.put('/upd', crudModel.update);
// //To delete a patient
router.delete('/del', crudModel.delete);

// //To schedule patient
router.put('/updApvl', crudModel.updateApvl);
router.delete('/updApvl', crudModel.updateApvl);

module.exports = router;
