const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const  Liste_ProduitsSchema = new Schema(
	{
		Secteur: {
		type: String,
		required: false,
		trim: true
	  },

	  Code_SH: {
		type: String,
		required: false,
		trim: true
	  },
	  attribut: {
		type: String,
		required: false,
		trim: true
	  },
	  Filiere: {
		type: String,
		required: false,
		trim: true
	  },
	Produit: {
		type: String,
		required: false,
		trim: true
	  },

	},

  );

  const Liste_Produits = mongoose.model('Liste_Produits',Liste_ProduitsSchema);
  module.exports = Liste_Produits ;




