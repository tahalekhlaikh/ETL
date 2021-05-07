const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const  Marche_africainSchema = new Schema(
	{
	 Expo_Impo_Intra: {
		type: String,
		required: true,
		trim: true
	  },
	  Expo_Impo_Intra_2019: {
		type: String,
		required: true,
		trim: true
	  },
	   Produit: {
		type: String,
		required: true,
		trim: true
	  },

	},

  );

  const Marche_africain = mongoose.model('Marche_africain', Marche_africainSchema);
  module.exports = Marche_africain;




