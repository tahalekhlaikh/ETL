var mongoose = require('mongoose');


const PaysSchema = new mongoose.Schema({
	Continent:String,
	Population:String,
	Superficie:String,
	Pays_partenaires_Trade_Map:String,
	Capitale:String,
	IDH:String,
	Monnaie:String,
	Regime_politique:String,
	Langue_officielle:String,
	Langue_du_Business:String,
	PIB_2009_USD:String,
	PIB_2011_USD:String,
	PIB_2012_USD:String,
	PIB_2013_USD:String,
	PIB_2015_USD:String,
	PIB_2017_USD:String,
	PIB_2019_USD:String,
	Croissance_du_PIB:String,
	PIB_par_habitant:String,

	PIB:String,
	Flux_entrants:String,
	Flux_sortants:String,
	Score_doing_Business:String,
	Importations_2019:String,
	Exportations_2019:String,
	Balance_commerciale:String,


	Taux_de_penetration_des_importations:String,
	Taux_douverture:String,


	Nature_daccord:String,
	Date_de_signature:String,
	Entree_en_vigueur:String,
	Champ_dapplication:String,
	Duree:String,
	Documents_necessaires_importation:String,
	Documents_necessaires_exportation:String,
	Indice_de_connectivite:String,
	Classement_indice:String,
	Classement_qualite:String,
	Connectivite_des_transports_maritimes_reguliers:String,
	Classement_connectivite:String,
	Qualite_infrastructure_commerciale_et_des_transports:String,
	Competence_qualite_services_logistiques:String,
	Classement_competence:String,
	Efficacite_processus_douanement:String,
	Classement_efficacite:String,
	Performance_globale:String,
	Classement_performance:String,
	Distance_culturelle:String,
	Distance_politique:String,
	Distance_reglementaire:String,
	Distance_geographique:String,
	Distance_economique:String,
	Distance_administrative:String,
	Accord:String,

	Exportations_Maroc_2012:String,
	Exportations_Maroc_2013:String,
	Exportations_Maroc_2014:String,
	Exportations_Maroc_2015:String,
	Exportations_Maroc_2016:String,
	Exportations_Maroc_2017:String,
	Exportations_Maroc_2018:String,
	Exportations_Maroc_2019:String,
	TCAM_2012_2019_des_exportations_marocaines:String,
	Importations_Maroc_2012:String,
	Importations_Maroc_2013:String,
	Importations_Maroc_2014:String,
	Importations_Maroc_2015:String,
	Importations_Maroc_2016:String,
	Importations_Maroc_2017:String,
	Importations_Maroc_2018:String,
	Importations_Maroc_2019:String,
	TCAM_2012_2019_des_importations_marocaines:String,

  });


const Pays = mongoose.model('Pays',  PaysSchema);
module.exports = Pays;