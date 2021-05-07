const path = require('path');
const express = require('express');
const multer = require('multer');
const File = require('../models/file');
const Pays = require('../models/pays');
const List_produit = require('../models/List_produit');

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


	  try {
		console.log(req.body.id);
		File.updateMany({}, {
			choosen:false,
		}, function(err, affected, resp) {
		   console.log(resp);
		})
		File.updateOne({_id:req.body.id}, {
			choosen:true,
		}, function(err, affected, resp) {
		   console.log(resp);
		})


		const file = reader.readFile(req.body.file_path)
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

		console.log(test)

		Pays.deleteMany({}, function(err) {
			Pays.insertMany(JSON.parse(test), function(error, docs) {});;
		});


		//Pays.insertMany(JSON.parse(test), function(error, docs) {});

		res.send('file choosen successfully.');

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









































  Router.delete('/delete', async (req, res) => {

	try {
		console.log(req.body.file_path);
		var fs = require('fs');

		File.deleteOne({_id: req.body.id }, function (err) {
			if(err) console.log(err);
			console.log("Successful deletion");
		  });
fs.unlink(req.body.file_path, function (err) {
    if (err) throw err;
    // if no error, file has been deleted successfully
	Pays.collection.drop();
    console.log('File deleted!');
});

		console.log("success")
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