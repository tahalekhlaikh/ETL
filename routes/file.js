const path = require('path');
const express = require('express');
const multer = require('multer');
const File = require('../models/file');
const Router = express.Router();
var reader = require("xlsx");
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './files');
    },
    filename(req, file, cb) {
		cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
  }),
  limits: {
    fileSize: 1000000 // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
        )
      );
    }
    cb(undefined, true); // continue with upload
  }
});

Router.post(
  '/upload',
  upload.single('file'),
  async (req, res) => {
    try {
		console.log(res)
      const { year,nom,description} = req.body;
      const { path, mimetype} = req.file;
      const file = new File({
       year,
	   nom,
	   description,

        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();


      res.send('file uploaded successfully.');



    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }


  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }

);




Router.post('/choosen',function (req, res)  {
	console.log(req.body.name);

	  try {


		const file = reader.readFile(req.body.name)
		let data = []
		const sheets = file.SheetNames
		for(let i = 0; i < sheets.length; i++)
		{
		   const temp = reader.utils.sheet_to_json(
				file.Sheets[file.SheetNames[i]])
		   temp.forEach((res) => {
			  data.push(res)
		   })
		}

		let test = JSON.stringify(data, null, 2);
		console.log("hey")
		console.log(test)
		res.send('file uploaded successfully.');


	  } catch (error) {
		res.status(400).send('Error while try Choosin file. Try again later.');
	  }


	},
	(error, req, res, next) => {
	  if (error) {
		res.status(500).send(error.message);
	  }
	}

  );



  Router.delete('/choosen/:file_path', async (req, res) => {
	try {

	} catch (error) {
	  res.status(400).send('Error while downloading file. Try again later.');
	}
  });











Router.get('/getAllFiles', async (req, res) => {
  try {
    const files = await File.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send('Error while getting list of files. Try again later.');
  }
});

Router.get('/download/:id', async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    res.set({
      'Content-Type': file.file_mimetype
    });
    res.sendFile(path.join(__dirname, '..', file.file_path));
  } catch (error) {
    res.status(400).send('Error while downloading file. Try again later.');
  }
});

module.exports = Router;