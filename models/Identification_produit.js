const mongoose = require('mongoose');

const IdentificationSchema = mongoose.Schema(
	{
	 Secteur: {
		type: String,
		required: false,
		trim: true
	  },
	  Filiere: {
		type: String,
		required: false,
		trim: true
	  },
	  Code_SH: {
		type: String,
		required: false,
		trim: true
	  },
	  Produit: {
		type: String,
		required: false,
	  },
	  Marche_mondial: {
		type: String,
		required: false,
		default: false
	  },

	},

  );

  const Identification_produit = mongoose.model('Identification_produit', IdentificationSchema);
  module.exports = Identification_produit;




