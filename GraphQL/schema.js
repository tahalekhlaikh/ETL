const Pays = require('../models/pays');
const Marche_mondial= require('../models/marche_mondial');
const Marche_Type=require('./Marche_Type')
const IdentificationType=require('./Identification_Type')
const Principaux_importateurs_mondiaux_Type=require('./Principaux_importateurs_mondiaux_Type')
const Principaux_importateurs_mondiaux=require('../models/Principaux_importateurs_mondiaux');
const Principaux_exportateurs_mondiaux=require('../models/Principaux_exportateurs_mondiaux');
const Identification_produit=require('../models/Identification_produit');
const Marche_africain=require('../models/Marche_africain');
const Principaux_importateurs_africains=require('../models/Principaux_importateurs_africains');
const Positionnement_du_Maroc=require('../models/Positionnement_du_Maroc');
const Principaux_exportateurs_africains=require('../models/Principaux_exportateurs_africains');
const Potentiel_exportation_monde=require('../models/Potentiel_exportation_monde');
const Potentiel_exportation_afrique=require('../models/Potentiel_exportation_Afrique');
const Exportation_Maroc=require('../models/Exportation_Maroc');
const Principaux_exportateurs_mondiaux_Type=require('./Principaux_exportateurs_mondiaux_Type')
const Principaux_importateurs_africains_Type=require('./Principaux_importateurs_africains_Type')
const Principaux_exportateurs_africains_Type=require('./Principaux_exportateurs_africains_Type')
const Marche_africain_Type=require('./Marche_africain_Type')
const Position_Type=require('./Position_Type')
const Potentiel_exportation_monde_Type=require('./Potentiel_exportation_monde_Type')
const Potentiel_exportation_afrique_Type=require('./Potentiel_exportation_afrique_Type')
const Exportation_Maroc_Type=require('./Exportation_Maroc_Type')

const{
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull,
	GraphQLID
} = require('graphql')


const CountryType =new GraphQLObjectType({
    name:'country',
    fields:()=>({
		id:{type:GraphQLID},






		Continent:{type:GraphQLNonNull(GraphQLString)},
		Population:{type:(GraphQLString)},
		Superficie:{type:GraphQLNonNull(GraphQLString)},
		Pays_partenaires_Trade_Map:{type:GraphQLNonNull(GraphQLString)},
		Capitale:{type:(GraphQLString)},
		IDH:{type:GraphQLNonNull(GraphQLString)},
		Monnaie:{type:GraphQLNonNull(GraphQLString)},
		Regime_politique:{type:GraphQLNonNull(GraphQLString)},
		Langue_officielle:{type:GraphQLNonNull(GraphQLString)},
		Langue_du_Business:{type:GraphQLNonNull(GraphQLString)},
        PIB_2009_USD:{type:(GraphQLString)},
		PIB_2011_USD:{type:(GraphQLString)},
		PIB_2012_USD:{type:(GraphQLString)},
		PIB_2013_USD:{type:(GraphQLString)},
		PIB_2015_USD:{type:(GraphQLString)},
		PIB_2017_USD:{type:(GraphQLString)},
		PIB_2019_USD:{type:(GraphQLString)},
		Croissance_du_PIB:{type:(GraphQLString)},
		PIB_par_habitant:{type:(GraphQLString)},
        PIB:{type:(GraphQLString)},
		Flux_entrants:{type:(GraphQLString)},
		Flux_sortants:{type:(GraphQLString)},
		Score_doing_Business:{type:(GraphQLString)},
		Importations_2019:{type:(GraphQLString)},
		Exportations_2019:{type:(GraphQLString)},
		Balance_commerciale:{type:(GraphQLString)},
       Accord:{type:(GraphQLString)},

		Taux_de_penetration_des_importations:{type:(GraphQLString)},
		Taux_douverture:{type:(GraphQLString)},


		Nature_daccord:{type:(GraphQLString)},
		Date_de_signature:{type:(GraphQLString)},
		Entree_en_vigueur:{type:(GraphQLString)},
		Champ_dapplication:{type:(GraphQLString)},
		Duree:{type:(GraphQLString)},
		Documents_necessaires_importation:{type:(GraphQLString)},
		Documents_necessaires_exportation:{type:(GraphQLString)},
		Indice_de_connectivite:{type:(GraphQLString)},
		Classement_indice:{type:(GraphQLString)},
		Classement_qualite:{type:(GraphQLString)},
		Connectivite_des_transports_maritimes_reguliers:{type:(GraphQLString)},
		Classement_connectivite:{type:(GraphQLString)},
		Qualite_infrastructure_commerciale_et_des_transports:{type:(GraphQLString)},
		Competence_qualite_services_logistiques:{type:(GraphQLString)},
		Classement_competence:{type:(GraphQLString)},
		Efficacite_processus_douanement:{type:(GraphQLString)},
		Classement_efficacite:{type:(GraphQLString)},
		Performance_globale:{type:(GraphQLString)},
		Classement_performance:{type:(GraphQLString)},
		Distance_culturelle:{type:(GraphQLString)},
		Distance_administrative:{type:(GraphQLString)},
		Distance_politique:{type:(GraphQLString)},
		Distance_reglementaire:{type:(GraphQLString)},
		Distance_geographique:{type:(GraphQLString)},
		Distance_economique:{type:(GraphQLString)},
		Exportations_Maroc_2012:{type:(GraphQLString)},
		Exportations_Maroc_2013:{type:(GraphQLString)},
		Exportations_Maroc_2014:{type:(GraphQLString)},
		Exportations_Maroc_2015:{type:(GraphQLString)},
		Exportations_Maroc_2016:{type:(GraphQLString)},
		Exportations_Maroc_2017:{type:(GraphQLString)},
		Exportations_Maroc_2018:{type:(GraphQLString)},
		Exportations_Maroc_2019:{type:(GraphQLString)},
		TCAM_2012_2019_des_exportations_marocaines:{type:(GraphQLString)},
		Importations_Maroc_2012:{type:(GraphQLString)},
		Importations_Maroc_2013:{type:(GraphQLString)},
		Importations_Maroc_2014:{type:(GraphQLString)},
		Importations_Maroc_2015:{type:(GraphQLString)},
		Importations_Maroc_2016:{type:(GraphQLString)},
		Importations_Maroc_2017:{type:(GraphQLString)},
		Importations_Maroc_2018:{type:(GraphQLString)},
		Importations_Maroc_2019:{type:(GraphQLString)},
		TCAM_2012_2019_des_importations_marocaines:{type:(GraphQLString)},

    })
})














const RootQueryType = new GraphQLObjectType({
	name: 'Query',
	description: 'Root Query',
	fields: () => ({
	  countrySingle: {
		type: CountryType,
		description: 'Un seul Pays',
		args: {

			Pays_partenaires_Trade_Map:{ type: GraphQLString},

		},
		resolve: (parent, args,context,info) =>{return Pays.findOne({Pays_partenaires_Trade_Map:args.Pays_partenaires_Trade_Map})}
	  },

	  Marche: {
		type: new GraphQLList(Marche_Type),
		description: 'Listes Des Marchés',
		args: {

			Produit:{ type: GraphQLString},

		},
		resolve: (parent, args,context,info) =>{return Marche_mondial.find({Produit:args.Produit})}
	  },
	  Principaux_importateurs_mondiaux: {
		type: new GraphQLList(Principaux_importateurs_mondiaux_Type),
		description: 'List des importateurs mondiaux',
		args: {

			Produit:{ type: GraphQLString},

		},
		resolve: (parent, args,context,info) =>{return Principaux_importateurs_mondiaux.find({Produit:args.Produit})}
	  },
	  Principaux_exportateurs_mondiaux: {
		type: new GraphQLList(Principaux_exportateurs_mondiaux_Type),
		description: 'List des exportateurs mondiaux',
		args: {

			Produit:{ type: GraphQLString},

		},
		resolve: (parent, args,context,info) =>{return Principaux_exportateurs_mondiaux.find({Produit:args.Produit})}
	  },
	  Principaux_importateurs_africains: {
		type: new GraphQLList(Principaux_importateurs_africains_Type),
		description: 'List des importateurs africains',
		args: {

			Produit:{ type: GraphQLString},

		},
		resolve: (parent, args,context,info) =>{return Principaux_importateurs_africains.find({Produit:args.Produit})}
	  },
	  Principaux_exportateurs_africains: {
		type: new GraphQLList(Principaux_exportateurs_africains_Type),
		description: 'List des exportateurs africains',
		args: {

			Produit:{ type: GraphQLString},

		},
		resolve: (parent, args,context,info) =>{return Principaux_exportateurs_africains.find({Produit:args.Produit})}
	  },
	  Marche_africain: {
		type: new GraphQLList(Marche_africain_Type),
		description: 'Description du marche africain',
		args: {

			Produit:{ type: GraphQLString},

		},
		resolve: (parent, args,context,info) =>{return  Marche_africain.find({Produit:args.Produit})}
	  },
	  Identification:{
		type: new GraphQLList(IdentificationType),
		description: 'Identification du Produit',
		args: {

			Produit:{ type: GraphQLString},

		},
		resolve: (parent, args,context,info) =>{return   Identification_produit.find({Produit:args.Produit})}
	  },
	  Position:{
		type: new GraphQLList(Position_Type),
		description: 'Positionnement_du_Maroc',
		args: {

			Produit:{ type: GraphQLString},

		},
		resolve: (parent, args,context,info) =>{return   Positionnement_du_Maroc.find({Produit:args.Produit})}
	  },
	  Potentiel_exportation_monde:{
		type: new GraphQLList(Potentiel_exportation_monde_Type),
		description: 'Potentiel_exportation_monde',
		args: {

			Produit:{ type: GraphQLString},

		},
		resolve: (parent, args,context,info) =>{return   Potentiel_exportation_monde.find({Produit:args.Produit})}
	  },
	  Potentiel_exportation_afrique:{
		type: new GraphQLList(Potentiel_exportation_afrique_Type),
		description: 'Potentiel_exportation_afrique',
		args: {

			Produit:{ type: GraphQLString},

		},
		resolve: (parent, args,context,info) =>{return   Potentiel_exportation_afrique.find({Produit:args.Produit})}
	  },
	  Exportation_maroc:{
		type: new GraphQLList(Exportation_Maroc_Type),
		description: 'exportation_maroc',
		args: {

			Produit:{ type: GraphQLString},

		},
		resolve: (parent, args,context,info) =>{return  Exportation_Maroc.find({Produit:args.Produit})}
	  },
	})
  })

  const schema =new GraphQLSchema({
    query:RootQueryType
})
module.exports = schema;