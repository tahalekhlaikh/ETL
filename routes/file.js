const path = require('path');
const express = require('express');
const multer = require('multer');
const File = require('../models/file');
const Pays = require('../models/pays');


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
    if (!file.originalname.match(/\.(xlsx|xls)$/)) {
      return cb(
        new Error(
          ' télécharger uniquement des fichiers au format xslx, xls.'
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
    File.insertMany([{nom:nom,year:year,description:description,file_path:path,mimetype:mimetype}])



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

function jsonConcat(o1, o2) {
	for (var key in o2) {
	 o1[key] = o2[key];
	}
	return o1;
   }

Router.post(
	'/upload_produit',
	upload.single('file'),
	async (req, res) => {
	  try {

		const { year,nom,description} = req.body;
		const { path, mimetype} = req.file;
		const file = new File({
		 year,
		 nom,
		 description,

		  file_path: path,
		  file_mimetype: mimetype
		});

		const my_file = reader.readFile(req.file.path)
		let data = []
		const sheets = my_file.SheetNames

		for(let i = 0; i < sheets.length; i++)
		{
		   const temp = reader.utils.sheet_to_json(
			my_file.Sheets[my_file.SheetNames[i]])
			if(i==0)(
		   temp.forEach((res) => {
			res.Produit=res.Produit.trimStart();
			res.Produit=res.Produit.trimEnd();

			  data.push(res)
		   })
			)
		}

		let test = JSON.stringify(data, null, 2);


		var json2 = { nom: nom, year: year,description:description,file_path: path,file_mimetype: mimetype};
		var output = {};
		output = jsonConcat(output, data[0]);

		output = jsonConcat(output, json2);




		File.insertMany([output],function(error, docs) {console.log(error)});




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






































Router.post('/choosen_pays',function (req, res)  {


	  try {
		console.log(req.body.id);
		File.updateMany({attribut:"null"}, {
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
	  res.status(400).send('Erreur lors du téléchargement du fichier. Réessayez plus tard');
	}
  });











Router.get('/getCountriesFiles', async (req, res) => {
  try {
    const files = await File.find({Secteur:"null"});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send("Erreur lors de l'obtention de la liste des fichiers. Réessayez plus tard.");
  }
});


Router.get('/getProductsFiles', async (req, res) => {
	try {

		console.log(req.query.selectedOption)
	  const files = await File.find({Produit:req.query.selectedOption});
	  const sortedByCreationDate = files.sort(
		(a, b) => b.createdAt - a.createdAt
	  );
	  res.send(sortedByCreationDate);
	} catch (error) {
	  res.status(400).send("Erreur lors de l'obtention de la liste des fichiers. Réessayez plus tard.");
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
    res.status(400).send('Erreur lors du téléchargement du fichier. Réessayez plus tard.');
  }
});

module.exports = Router;