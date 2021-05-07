const{

    GraphQLObjectType,
    GraphQLString,

    GraphQLNonNull,
	GraphQLID
} = require('graphql')

 const Marche_africain_Type =new GraphQLObjectType({
    name:'marche_africain',
    fields:()=>({
		id:{type:GraphQLID},



		Expo_Impo_Intra_2019:{type:GraphQLNonNull(GraphQLString)},
		Expo_Impo_Intra:{type:(GraphQLString)},

		Produit:{type:GraphQLNonNull(GraphQLString)},




    })
})
module.exports= Marche_africain_Type;