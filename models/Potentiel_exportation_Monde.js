const mongoose = require('mongoose');

const Potentiel_exportation_MondeSchema = mongoose.Schema(
	{
	 Produit: {
		type: String,
		required: false,
		trim: true
	  },
	 Pays: {
		type: String,
		required: false,
		trim: true
	  },
	  Marche_previsionnel: {
		type: String,
		required: false,
		trim: true
	  },
	  Exportations_actuelles_Maroc: {
		type: String,
		required: false,
		trim: true
	  },
	  Importations: {
		type: String,
		required: false,
	  },

	  PDM_actuelle_Maroc:{
		type: String,
		required: false,
		default: false
	  },

	},

  );

  const Potentiel_exportation_Monde = mongoose.model('Potentiel_exportation_Monde',Potentiel_exportation_MondeSchema);
  module.exports =Potentiel_exportation_Monde;




