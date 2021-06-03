const mongoose = require('mongoose');

const Expo_AfriqueSchema = mongoose.Schema(
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

  const Principaux_exportateurs_afrique = mongoose.model('Principaux_exportateurs_afrique',Expo_AfriqueSchema);
  module.exports = Principaux_exportateurs_afrique;




