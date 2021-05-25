const mongoose = require('mongoose');

const Potentiel_exportation_MondeSchema = mongoose.Schema(
	{
	 Produit: {
		type: String,
		required: true,
		trim: true
	  },
	 Pays: {
		type: String,
		required: true,
		trim: true
	  },
	  Marche_previsionnel: {
		type: String,
		required: true,
		trim: true
	  },
	  Exportations_actuelles_Maroc: {
		type: String,
		required: true,
		trim: true
	  },
	  Importations: {
		type: String,
		required: true
	  },

	  PDM_actuelle_Maroc:{
		type: String,
		required: true,
		default: false
	  },

	},

  );

  const Potentiel_exportation_Monde = mongoose.model('Potentiel_exportation_Monde',Potentiel_exportation_MondeSchema);
  module.exports =Potentiel_exportation_Monde;




