const mongoose = require('mongoose');

const Expo_AfriqueSchema = mongoose.Schema(
	{
	 Pays: {
		type: String,
		required: true,
		trim: true
	  },
	  Exportations_2019: {
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

  const Principaux_exportateurs_afrique = mongoose.model('Principaux_exportateurs_afrique',Expo_AfriqueSchema);
  module.exports = Principaux_exportateurs_afrique;




