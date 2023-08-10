const express = require('express');
const route = express.Router();
const databaseCon = require('../models/db.model');
const { createHmac } = require('crypto')


route.post('/:user/auth', async (req, res) => {
    user = req.params.user;
    if (req.body.username && req.body.password) {
        const query = `SELECT username,password FROM auth WHERE c_id ='${user}'`;
        const hash = createHmac('sha256', 'secret').update(req.body.password).digest('hex');
        await databaseCon.query(query, (err, rows, fields) => {
            if (err) throw err
            if (rows.length > 0) {
                if (req.body.username == rows[0].username && hash == rows[0].password) {
                    res.status(200).send({ status: true, msg: 'login sucessfully' });}
            } else {
                res.status(200).send({ status: false, msg: 'login Unsucessfully' });
            }
        })}
});
route.get('/:user/logOut', (req, res) => {
    user = req.params.user; req.session.destroy();
    res.redirect(`/${user}`)
})



module.exports = route;