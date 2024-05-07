import multer from 'multer'

const storage = multer.diskStorage({
  destination(req, file, callback) {
    return callback(null, './data/files')
  },
  
})

const FileUpload = () => {

}

export default FileUpload