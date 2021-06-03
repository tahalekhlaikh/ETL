const mongoose = require('mongoose');

const  Exportation_MarocSchema = mongoose.Schema(
	{

	 Monde_Afrique: {
		type: String,
		required: true
	  },

	  Exportations_du_Maroc_2019: {
		type: String,
		required: true
	  },
	  TCAM_2012_2019: {
		type: String,
		required: true
	  },
	  Part_du_marche: {
		type: String,
		required: true
	  },
	  Classement: {
		type: String,
		required: true
	  },
	  Commentaire: {
		type: String,
		required: false
	  },
	  Produit: {
		type: String,
		required: true,

	  },


	},

  );

  const Exportation_Maroc = mongoose.model('Exportation_Maroc',Exportation_MarocSchema);
  module.exports = Exportation_Maroc;




