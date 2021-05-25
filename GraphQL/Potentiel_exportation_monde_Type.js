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
        Pays:{type:GraphQLNonNull(GraphQLString)},


		Marche_previsionnel:{type:GraphQLNonNull(GraphQLString)},
		Exportations_actuelles_Maroc:{type:GraphQLNonNull(GraphQLString)},
        Importations:{type:GraphQLNonNull(GraphQLString)},
		Produit:{type:GraphQLNonNull(GraphQLString)},
		PDM_actuelle_Maroc:{type:GraphQLNonNull(GraphQLString)},




    })
})
module.exports= Potentiel_exportation_monde_Type;