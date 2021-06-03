var mongoose = require('mongoose');

const  MarcheSchema = mongoose.Schema(
	{
	 Continent: {
		type: String,
		required: false,
		trim: true
	  },
	  Importations_2019: {
		type: String,
		required: false,
		trim: true
	  },
	  Exportations_2019: {
		type: String,
		required: false,
		trim: true
	  },
	  Taille_du_marche_2019: {
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

  const Marche_mondial = mongoose.model('Marche_mondial', MarcheSchema);
  module.exports = Marche_mondial;




