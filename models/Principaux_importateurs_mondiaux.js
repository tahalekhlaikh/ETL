const mongoose = require('mongoose');

const Impo_MondiauxSchema = mongoose.Schema(
	{
	 Pays: {
		type: String,
		required: true,
		trim: true
	  },
	  Importations_2019: {
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

  const Principaux_importateurs_mondiaux = mongoose.model('Principaux_importateurs_mondiaux',Impo_MondiauxSchema);
  module.exports = Principaux_importateurs_mondiaux;




