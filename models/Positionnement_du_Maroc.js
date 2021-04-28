const mongoose = require('mongoose');

const  PositionnementSchema = mongoose.Schema(
	{
	 Pays: {
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
	  Export_2019: {
		type: String,
		required: true,
		trim: true
	  },

	},

  );

  const  Positionnement_du_Maroc= mongoose.model('Positionnement_du_Maroc', PositionnementSchema);
  module.exports =  Positionnement_du_Maroc;




