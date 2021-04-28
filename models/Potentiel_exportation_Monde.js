const mongoose = require('mongoose');

const Potentiel_exportation_MondeSchema = mongoose.Schema(
	{
	 Produit: {
		type: String,
		required: true,
		trim: true
	  },
	  Potentiel_exportation: {
		type: String,
		required: true,
		trim: true
	  },
	  Exportations_actuelles: {
		type: String,
		required: true,
		trim: true
	  },
	  Potentiel_inexploite: {
		type: String,
		required: true
	  },
	  Produit:{
		type: String,
		required: true,
		default: false
	  },

	},

  );

  const Potentiel_exportation_Monde = mongoose.model('Potentiel_exportation_Monde',Potentiel_exportation_MondeSchema);
  module.exports =Potentiel_exportation_Monde;




