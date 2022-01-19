const express=require("express");
const multer=require("multer");
const uploadRouter = express.Router();
const path= require("path");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })


uploadRouter.post("/", upload.single("file"), (req, res) => {
    console.log(req.file);
    res.send(`/uploads/${req.file.filename}`);
  });
  
  module.exports = uploadRouter;