const mongoose = require('mongoose');

const Potentiel_exportation_ContinentSchema = mongoose.Schema(
	{
	 Produit: {
		type: String,
		required: false,
		trim: true
	  },
	  Potentiel_exportation: {
		type: String,
		required: false,
		trim: true
	  },
	  Exportations_actuelles: {
		type: String,
		required: false,
		trim: true
	  },
	  Potentiel_inexploite: {
		type: String,
		required: true
	  },
	  Produit:{
		type: String,
		required: false,
		default: false
	  },

	},

  );

  const Potentiel_exportation_Continent = mongoose.model('Potentiel_exportation_Continent',Potentiel_exportation_ContinentSchema);
  module.exports =Potentiel_exportation_Continent;




