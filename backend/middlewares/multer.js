import multer from "multer";
import path from "path";
import fs from "fs"

const uploadDir = "uploads";
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}//ensure the upload folder exists at the backend folder

//multer setup
const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,uploadDir)
    },
    filename:function (req,file,cb){
        const uniqueName = Date.now() + "-" +Math.round(Math.random() * 1e9);
        cb(
            null,uniqueName + path.extname(file.originalname)
        )
    }
})

//file filter
const filefilter = (req,res,cb) => {
    if( file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/webp"
     ){
        cb(null,true);
     }
     else{
        cb(new Error("Only iomages file are allowed",false));
     }
};

//multer config
const upload = multer({
    storage,
    filefilter,
    limits:{
        fileSize : 5*1021*1024 //5mb
    }
});

export default upload;