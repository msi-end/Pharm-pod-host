const databaseCon = require('../models/db.model');
const sse = require('./sse-API.js');
// const sms = require('./smsApi');




// patient application req
exports.add = (req, res) => {
    let user = req.query.user;
    let tdt = new Date().toLocaleDateString('en-GB', { day: "2-digit", month: "2-digit", year: "numeric" })
    databaseCon.query(`SELECT COUNT(p_aptDate) as count from ${user}_PS_data WHERE p_aptDate='${req.body.date}'; SELECT maxApply ,autoReqAppl,form_Status from client_Info WHERE c_id='${user}'`, function (err, results, fields) {
        if (err) throw err;
        if (results[1][0].form_Status == 'true') {
            if (results[1][0].maxApply >= results[0][0].count) {
                let params = [req.body.name, req.body.number, req.body.otherInfo, req.body.doctor, req.body.date, results[1][0].autoReqAppl];
                let sql = `INSERT INTO ${user}_PS_data (p_name,p_number,p_OthInfo,p_doctor,p_aptDate,p_aptStatus) VALUES (?) `;
                databaseCon.query(sql, [params], function (err, result) {
                    if (err) throw err;
                    res.send({ status: true, msg: 'Application submited Sucessfully!' });
                    if (results[1][0].autoReqAppl == 'true'&& tdt == req.body.date) {
                        let data = { id: result.insertId, name: req.body.name, number: req.body.number, otherInfo: req.body.otherInfo, doc: req.body.doctor, date: req.body.date }
                        sse.sendSSE(data, user)
               //         sms.smsAPI(req.body.number, `Dear ${req.body.name}, Your booking on Cipmedic is Successful.`);
                    }
                }) 
            } else { res.status(403).send({ status: false, msg: 'Application Limit Exceeded! Call Us for Any Query!' }) }
        } else {
            res.send({ status: false, msg: 'Application Submission is temporarily Closed! You Can Contact Via Call.' });
        }
    })
}


// Review
// write-add review
exports.pushData = (req, res) => {
    let a = req.body.review === '' ? null : `"${req.body.review}"`;
    let b = req.body.rating === '' ? null : `"${req.body.rating}"`;
    let c = req.body.u_name === '' ? null : `"${req.body.u_name}"`;
    let d = req.body.mail === '' ? null : `"${req.body.mail}"`;
    let query = `INSERT INTO rr_data ( c_id, rating, review, userName, email) VALUES ('${req.body.idNum}', ${b}, ${a}, ${c}, ${d})`;
    databaseCon.query(query, (err, result) => {
        if (err) {
            res.status(301).send({ status: false, msg: 'Unable to send data' })
        } else {
            res.status(200).send({ status: true, msg: 'Sucessfully eend data' })
        }
    })
}
// write-add review
exports.getClsID = (req, res) => {
    let q = `SELECT client_Info.c_id, client_Info.c_name, client_Info.c_location, COUNT(rr_data.review) 
    AS total_review, AVG(rr_data.rating) AS star FROM client_Info INNER JOIN rr_data ON 
    rr_data.c_id = client_Info.c_id WHERE client_Info.c_id ='${req.params.id}' GROUP BY c_id;`
    databaseCon.query(q, (err, result) => {
        if (err) throw err;
        res.status(200).send({ data: result, status: true, msg: 'Sucessful' })
    })
}
// get review by Id
exports.getRevID = (req, res) => {
    let q = `SELECT client_Info.c_id, client_Info.c_name, rr_data.review, rr_data.userName FROM client_Info INNER JOIN rr_data ON rr_data.c_id = client_Info.c_id 
    WHERE client_Info.c_id ='${req.params.id}'`
    databaseCon.query(q, (err, result) => {
        if (err) throw err;
        res.status(200).send({ data: result, status: true, msg: 'Sucessful' })
    })
}
// exports.getCls = (req, res) => {
//     let q = `SELECT client_Info.c_id, client_Info.Name, client_Info.location, COUNT(rr_data.rev) AS total_review,
//              AVG(rr_data.rating) AS star FROM client_Info INNER JOIN rr_data ON rr_data.c_id = client_Info.c_id
//              GROUP BY c_id;`;
//     databaseCon.query(q, (err, result) => {
//         if (err) throw err;
//        res.status(200).send({ data:result, status: true, msg: 'Sucessful' })
//         console.log("sended all data");
//     })
// }


// Doctors Avaibility 
exports.docStatus = (req, res) => {
    let q = `SELECT doc_id, d_name,status,day from cl_doctor WHERE c_id ='${req.query.user}'`
    databaseCon.query(q, (err, result) => {
        if (err) throw err;
        if (result.length >= 0) {
            res.status(200).send({ data: result, status: true, msg: 'Sucessful' })
        } else {
            res.status(403).send({ status: false, msg: 'Some thing wents wrong !' })
        }
    })
}
