const mongoose = require('mongoose');

const IdentificationSchema = mongoose.Schema(
	{
	 Secteur: {
		type: String,
		required: true,
		trim: true
	  },
	  Filiere: {
		type: String,
		required: true,
		trim: true
	  },
	  Code_SH: {
		type: String,
		required: true,
		trim: true
	  },
	  Produit: {
		type: String,
		required: true
	  },
	  Marche_mondial: {
		type: String,
		required: true,
		default: false
	  },

	},

  );

  const Identification_produit = mongoose.model('Identification_produit', IdentificationSchema);
  module.exports = Identification_produit;




