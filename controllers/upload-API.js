const multer = require('multer');
const fs = require('fs');


const saveFile = multer.diskStorage({
    destination: (req, file, callback) => {
        if (!fs.existsSync(`static/upload/${req.query.user}/${req.query.type}`)) {
            fs.mkdirSync(`static/upload/${req.query.user}/${req.query.type}`);
            
        } else {
 
            callback(null, `static/upload/${req.query.user}/${req.query.type}`)
        }},
    filename: (req, file, callback) => {
        callback(null, (file.originalname))
    },
})

let multerSet = multer({ storage: saveFile })

setFile = (req, res) => {

    if (!req.file) {
        return res.status(400).send({ status: false, msg: 'Sucessful Updated' })
    } else {
             res.status(200).send({ status: true, msg: 'Sucessful Changes Image' })
    }
}

module.exports = {
    singlefile: multerSet.single('file'),
    setFile,
}
