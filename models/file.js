const mongoose = require('mongoose');

const fileSchema = mongoose.Schema(
	{
	  year: {
		type: String,
		required: false,
		trim: true
	  },
	  nom: {
		type: String,
		required: false,
		trim: true
	  },
	  description: {
		type: String,
		required: false,
		trim: true
	  },
	  file_path: {
		type: String,
		required: false
	  },
	  choosen: {
		type: Boolean,
		required: false,
		default: false
	  },


	  Secteur: {
		type: String,
		required: false,
		default: "null",
		trim: true
	  },
	  Filiere: {
		type: String,
		required: false,
		trim: true
	  },

	  Produit: {
		type: String,
		required: false
	  },













	  file_mimetype: {
		type: String,
		required: false
	  }
	},
	{
	  timestamps: true
	}
  );

  const File = mongoose.model('File', fileSchema);



  module.exports = File;
