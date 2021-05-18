const{

    GraphQLObjectType,
    GraphQLString,

    GraphQLNonNull,
	GraphQLID
} = require('graphql')

 const Liste_produits_Type =new GraphQLObjectType({
	 type:[String],
    name:'liste_produits',
    fields:()=>({




		Secteur:{type:GraphQLNonNull(GraphQLString)},






    })
})
module.exports= Liste_produits_Type;