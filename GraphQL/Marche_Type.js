const{

    GraphQLObjectType,
    GraphQLString,

    GraphQLNonNull,
	GraphQLID
} = require('graphql')

 const MarcheType =new GraphQLObjectType({
    name:'marche_mondial',
    fields:()=>({
		id:{type:GraphQLID},



		Continent:{type:GraphQLNonNull(GraphQLString)},
		Importations_2019:{type:(GraphQLString)},
		Exportations_2019:{type:GraphQLNonNull(GraphQLString)},
		Taille_du_marche_2019:{type:GraphQLNonNull(GraphQLString)},
		Produit:{type:GraphQLNonNull(GraphQLString)},



    })
})
module.exports= MarcheType;