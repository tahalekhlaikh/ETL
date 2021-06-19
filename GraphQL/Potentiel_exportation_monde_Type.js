const{

    GraphQLObjectType,
    GraphQLString,

    GraphQLNonNull,
	GraphQLID
} = require('graphql')

 const Potentiel_exportation_monde_Type =new GraphQLObjectType({
    name:'Potentiel_exportation_Monde_Type',
    fields:()=>({
		id:{type:GraphQLID},
        Pays:{type:(GraphQLString)},


		Marche_previsionnel:{type:(GraphQLString)},
		Exportations_actuelles_Maroc:{type:(GraphQLString)},
        Importations:{type:(GraphQLString)},
		Produit:{type:(GraphQLString)},
		PDM_actuelle_Maroc:{type:(GraphQLString)},




    })
})
module.exports= Potentiel_exportation_monde_Type;