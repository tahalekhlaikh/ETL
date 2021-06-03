const mongoose = require('mongoose');

const Expo_MondiauxSchema = mongoose.Schema(
	{
	 Pays: {
		type: String,
		required: false,
		trim: true
	  },
	  Exportations_2019: {
		type: String,
		required: false,
		trim: true
	  },
	  PDM_2019: {
		type: String,
		required: false,
		trim: true
	  },
	  TCAM_2012_2019: {
		type: String,
		required: false,
	  },
	  Produit: {
		type: String,
		required: false,
		default: false
	  },

	},

  );

  const Principaux_exportateurs_mondiaux = mongoose.model('Principaux_exportateurs_mondiaux',Expo_MondiauxSchema);
  module.exports = Principaux_exportateurs_mondiaux;




