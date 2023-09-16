const express = require('express');
const router = express.Router();
const crudModel = require('../controllers/crud-API.js')
const uploadModel = require('../controllers/upload-API.js')




router.get('/getAll',crudModel.getAll);
//To get all apply Req data
router.get('/apReq',crudModel.apReq);
//To get doctor details 
router.get('/getDoc',crudModel.getDoc);
router.get('/getDocID/:id',crudModel.getDocID);
router.post('/setDoc',crudModel.setDoc);
//update doctor information by ID
router.put('/UpdDoc/:id',crudModel.UpdDoc);


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

// //To Reject and  Delect request patient reqs
router.put('/updApvl', crudModel.updateApvl);
router.delete('/updApvl', crudModel.updateApvl);

// /// IMAGEpload Route 
router.post('/setFile',uploadModel.singlefile, uploadModel.setFile)

module.exports = router;
