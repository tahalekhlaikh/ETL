const mongoose = require('mongoose');

const Impo_MondiauxSchema = mongoose.Schema(
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

  const Principaux_importateurs_mondiaux = mongoose.model('Principaux_importateurs_mondiaux',Impo_MondiauxSchema);
  module.exports = Principaux_importateurs_mondiaux;




