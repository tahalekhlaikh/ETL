const mongoose = require('mongoose');

const Expo_MondiauxSchema = mongoose.Schema(
	{
	 Pays: {
		type: String,
		required: true,
		trim: true
	  },
	 2019: {
		type: String,
		required: true,
		trim: true
	  },
	  PDM_2019: {
		type: String,
		required: true,
		trim: true
	  },
	  TCAM_2012_2019: {
		type: String,
		required: true
	  },
	  Produit: {
		type: String,
		required: true,
		default: false
	  },

	},

  );

  const Principaux_exportateurs_mondiaux = mongoose.model('Principaux_exportateurs_mondiaux',Expo_MondiauxSchema);
  module.exports = Principaux_exportateurs_mondiaux;




