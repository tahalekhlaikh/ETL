const mongoose = require('mongoose');

const fileSchema = mongoose.Schema(
	{
	  year: {
		type: String,
		required: true,
		trim: true
	  },
	  nom: {
		type: String,
		required: true,
		trim: true
	  },
	  description: {
		type: String,
		required: true,
		trim: true
	  },
	  file_path: {
		type: String,
		required: true
	  },
	  choosen: {
		type: Boolean,
		required: true,
		default: false
	  },

	  file_mimetype: {
		type: String,
		required: true
	  }
	},
	{
	  timestamps: true
	}
  );

  const File = mongoose.model('File', fileSchema);



  module.exports = File;
