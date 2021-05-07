const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const  List_ProduitSchema = new Schema(
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
	  Attribut: {
		type: String,
		required: true,
		trim: true
	  },

	},

  );

  const List_Produit = mongoose.model('List_Produit ',List_ProduitSchema);
  module.exports = List_Produit ;




