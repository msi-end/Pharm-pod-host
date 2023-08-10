const databaseCon = require('../models/db.model');
const sse = require('./sse-API.js')


//**** */
// ADMIN CRUD 
//**** */
// Admin Side Crud
// let tdt = new Date().toLocaleDateString('en-GB', { day: "2-digit", month: "2-digit", year: "numeric" })
// if (req.session.loggedin) {
//     await databaseCon.query(`SELECT * from ${req.session.user_id}_PS_data WHERE p_aptDate='${tdt}' AND p_aptStatus='true';SELECT form_Status,autoReqAppl,maxApply FROM client_Info WHERE c_id='${req.session.user_id}' ;SELECT d_name from cl_doctor WHERE c_id = '${req.session.user_id}';SELECT COUNT(p_aptStatus) as cout FROM ${req.session.user_id}_PS_data WHERE p_aptDate='${tdt}' AND p_aptStatus='false'`, function (err, results, fields) {
//         console.log(results[3][0].cout);
//         if (err) { console.log('Admin Route Error' + err) };
//         if (true) { res.status(200).send('../views/admin/index.ejs', { sets: results[1][0], doc: results[2], ps_data: results[0], aplReq: results[3] }) }
//         else { res.status(200).send('../views/admin/index.ejs', { sets: results[1][0], doc: results[2], ps_data: '' }) }
//     })
// } else { res.status(201).send({ status: false, msg: 'Patient Created Sucessfully!' }) }


//To get all information
exports.getAll = async (req, res) => {
    let user = req.query.user;
    let tdt = new Date().toLocaleDateString('en-GB', { day: "2-digit", month: "2-digit", year: "numeric" })
    await databaseCon.query(`SELECT form_Status,autoReqAppl,maxApply FROM client_Info WHERE c_id='${user}' ;SELECT * from cl_doctor WHERE c_id = '${user}';SELECT COUNT(p_aptStatus) as cout FROM ${user}_PS_data WHERE p_aptDate='${tdt}' AND p_aptStatus='false';SELECT * from ${user}_PS_data WHERE p_aptDate='${tdt}' AND p_aptStatus='true'`, function (err, results, fields) {
        if (err) { console.log('Admin Route Error' + err) };
        if (results.length >= 0) { res.status(200).send({ set: results[0][0], docList: results[1], ReqCout: results[2][0], psList: results[3] }) }
        else { res.status(401).send({ status: false, msg: 'invalid Data retrive! ' }) }
    }
    )
}


//To get all apply Req data
exports.apReq = async (req, res) => {
    let tdt = new Date().toLocaleDateString('en-GB', { day: "2-digit", month: "2-digit", year: "numeric" });
    await databaseCon.query(`SELECT * from ${req.query.user}_PS_data WHERE p_aptDate='${tdt}' AND p_aptStatus='false';`, function (err, results, fields) {
        if (err) { console.log('Admin Route Error' + err) }
        if (results.length > 0) {
            res.status(200).send({ data: results, status: true, msg: 'Sucessfully Retrieved' })
        } else { res.status(403).send({ status: false, msg: 'Something wents wrong !' }) }
    })
}
//To get all doctor avaibility
exports.getDoc = (req, res) => {
    let q = `SELECT * from cl_doctor WHERE c_id ='${req.params.id}'`
    databaseCon.query(q, (err, result) => {
        if (err) throw err;
        if (result > 0) {
            res.status(200).send({ data: result, status: true, msg: 'Sucessful' })
        } else {
            res.status(403).send({ status: false, msg: 'Something wents wrong !' })
        }
    })
}
exports.setDoc = (req, res) => {
    console.log(req.body, req.query)
    let q = `UPDATE cl_doctor SET status='${req.body.status}' ,day='${req.body.date}' WHERE c_id ='${req.query.user}' AND doc_id='${req.body.Docid}'`
    databaseCon.query(q, (err, result) => {
        if (err) throw err;
        if (result) {
            res.status(200).send({ data: result, status: true, msg: 'Sucessful Updated' })
        } else {
            res.status(403).send({ status: false, msg: 'Something wents wrong !' })
        }
    })
}


// create Appointment/patient
exports.create = (req, res) => {
let user=req.query.user;
    let params = [req.body.name, req.body.number, req.body.OthInfo, req.body.doctor, req.body.date];
    let sql = `INSERT INTO ${user}_PS_data (p_name,p_number,p_OthInfo,p_doctor,p_aptDate) VALUES (?) `;
    databaseCon.query(sql, [params], function (err, results) {
        if (err) throw err;
        if(results){
           let data ={id:results.insertId,name:req.body.name,number:req.body.number,otherInfo:req.body.OthInfo,doc:req.body.doctor,date:req.body.date}
                    sse.sendSSE( data,user );
        res.status(201).send({ status: true, msg: 'Patient Created Sucessfully!' })
        }
    })

}


// get All by date
exports.getAll_date = (req, res) => {
    databaseCon.query(`SELECT * FROM ${req.query.user}_PS_data WHERE p_aptDate='${req.query.dt}'`, function (err, results, fields) {
        if (err) throw err;
        if (results.length >= 0) {
            res.status(201).send({ data: results, status: 'true', msg: 'Sucessfully date retrived ! ' })
        } else {
            res.status(403).send({ status: false, msg: 'fail, retrived by date ! ' })
        }
    })
}


//delete data
exports.delete = (req, res) => {
    let user = req.query.user;
    databaseCon.query(`INSERT INTO SU_Del_PSData(p_name, p_OthInfo, p_doctor,p_aptDate,p_number,c_id)  SELECT p_name, p_OthInfo, p_doctor,p_aptDate,p_number,'${user}' FROM ${user}_PS_data WHERE id ='${req.query.pid}';DELETE FROM ${user}_PS_data WHERE id='${req.query.pid}'`, function (error, results, fields) {
        if (error) throw error;
        res.status(201).send({ status: 'true', msg: 'Sucessfully date Deleted ! ' })
    })
}


// update Settings /udt/7 with data {/udt?user , /udt?user, /udt?user = body => maxAp: 'maxApply', autoAp: 'autoReqAppl', fState: 'form_Status'}
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ status: 'false', msg: 'Enter value Correctly' });
    }
    else if (req.query.upd_user == 'true') {
        let user = req.query.user;
        databaseCon.query(`UPDATE '${user}_PS_data' SET 'clientName'=?,'clientInfo'=? where 'id'=?`, [req.body.clientName, req.body.clientInfo, req.params.id],
            function (error, results, fields) {
                if (error) throw error;
                res.end(JSON.stringify(results));
            });
    }
    else if (req.query && req.body) {
    console.log(req.query, req.body)
        let obj = { maxAp: 'maxApply', autoAp: 'autoReqAppl', fState: 'form_Status' }
        if (Object.keys(req.body) in obj) {
            let sql = `UPDATE client_Info SET ${obj[(Object.keys(req.body))]}='${Object.values(req.body)[0]}' WHERE c_id='${req.query.user}' `;
            databaseCon.query(sql, (err, results) => {
                if (err) { res.status(400).send({ status: 'false', msg: 'Setting Updated Unsucessful!' }) } else {
                    res.status(200).send({ status: 'true', msg: 'Setting Updated Sucessfully! , Refresh the Page' })
                }
            })
        }
    }
}


//  find by one
exports.findOne = (req, res) => {
    databaseCon.query('select * from Client_Details where id=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
};


// Auto Approval deleted and approve data mover
exports.updateApvl = (req, res) => {
    let obj = {
        Acpt: `UPDATE ${req.session.user_id}_PS_data SET p_aptStatus=? WHERE id='${req.query.Acpt}'`,
        Rejt: `INSERT INTO SU_Rej_PSData(p_name, p_OthInfo, p_doctor,p_aptDate,p_number,c_id)  SELECT p_name, p_OthInfo, p_doctor,p_aptDate,p_number,'${req.session.user_id}' FROM ${req.session.user_id}_PS_data WHERE id ='${req.query.Rejt}';DELETE FROM ${req.session.user_id}_PS_data WHERE id='${req.query.Rejt}'`
    }
    if (Object.keys(req.query) in obj) {
        console.log(obj[Object.keys(req.query)]);
        databaseCon.query(obj[Object.keys(req.query)], ['true'], (err, results) => {
            if (err) { res.status(400).send({ status: 'false', msg: 'Setting Updated Unsucessful!' }) } else {
                res.status(200).send({ status: 'true', msg: 'Setting Updated Sucessfully! , Refresh the Page' })
            }
        })
    }
}

