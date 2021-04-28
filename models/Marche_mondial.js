var mongoose = require('mongoose');

const  MarcheSchema = mongoose.Schema(
	{
	 Continent: {
		type: String,
		required: true,
		trim: true
	  },
	  Importations_2019: {
		type: String,
		required: true,
		trim: true
	  },
	  Exportations_2019: {
		type: String,
		required: true,
		trim: true
	  },
	  Taille_du_marche_2019: {
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

  const Marche_mondial = mongoose.model('Marche_mondial', MarcheSchema);
  module.exports = Marche_mondial;




