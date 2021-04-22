const Pays = require('../models/pays');
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
		description: 'A Single Country',
		args: {

			Pays_partenaires_Trade_Map:{ type: GraphQLString},

		},
		resolve: (parent, args,context,info) =>{return Pays.findOne({Pays_partenaires_Trade_Map:args.Pays_partenaires_Trade_Map})}
	  },
	  countryData: {
		type: new GraphQLList(CountryType),
		description: 'List of All Countries',
		resolve: () => countryData
	  },

	})
  })

  const schema =new GraphQLSchema({
    query:RootQueryType
})
module.exports = schema;