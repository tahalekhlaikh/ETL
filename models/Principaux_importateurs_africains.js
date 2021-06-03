const mongoose = require('mongoose');

const Impo_AfriqueSchema = mongoose.Schema(
	{
		Pays: {
			type: String,
			required: false,
			trim: true
		  },
		  Importations_2019: {
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

  const Principaux_importateurs_afrique = mongoose.model('Principaux_importateurs_afrique',Impo_AfriqueSchema);
  module.exports = Principaux_importateurs_afrique;




