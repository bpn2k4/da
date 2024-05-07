
const createFiles = async ({ body, file }: CreateFileParams) => {

  console.log("file", file)
  return {
    x: 1
  }
}

const FileService = {
  createFiles
}


type CreateFileParams = {
  body: any,
  file?: Express.Multer.File | undefined
}

export default FileService