const express = require('express');
const route = express.Router();
const db = require('../models/db.model')



route.get('/', (req, res) => {
    res.render('../views/user/index.ejs')
})

route.get('/p/aboutus', (req, res) => {
    res.render('../views/user/page/aboutus.ejs')
})
route.get('/p/contactus', (req, res) => {
    res.render('../views/user/page/contactus.ejs')
})
route.get('/p/clinics', (req, res) => {
    db.query(`SELECT client_Info.c_id, client_Info.c_name,client_Info.url, client_Info.c_location,fees, COUNT(rr_data.review) AS total_review,
    AVG(rr_data.rating) AS star FROM client_Info INNER JOIN rr_data ON rr_data.c_id = client_Info.c_id
    GROUP BY c_id;`, function (err, results, fields) {
        if (err) {console.log('Clinic Route Error' + err)
        } else {res.status(200).render(`../views/user/page/allclinics.ejs`,{data:results})}});
}) 
route.get('/p/privacy-policy', (req, res) => {
    res.render('../views/user/page/privacypolicy.ejs')
})
route.get('/p/terms-conditions', (req, res) => {
    res.render('../views/user/page/t&c.ejs')
})
route.get('/p/health-tips', (req, res) => {
    res.render('../views/user/page/healthtips.ejs')
})
route.get('/p/doctors', (req, res) => {
    res.render('../views/user/page/alldoctrs.ejs')
})
route.get('/p/enquiry', (req, res) => {
    res.render('../views/user/page/cLInfo.ejs')
})
route.get('/p/service', (req, res) => {
    res.render('../views/user/page/productInfo.ejs')
})
// route.post('/:user/addApply', crudModel.add)


module.exports = route;
