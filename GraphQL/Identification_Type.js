const{

    GraphQLObjectType,
    GraphQLString,

    GraphQLNonNull,
	GraphQLID
} = require('graphql')

 const IdentificationType =new GraphQLObjectType({
    name:'Identification',
    fields:()=>({
		id:{type:GraphQLID},



		Secteur:{type:GraphQLNonNull(GraphQLString)},
		Filiere:{type:(GraphQLString)},
		Code_SH:{type:GraphQLNonNull(GraphQLString)},
		Marche_mondial:{type:GraphQLNonNull(GraphQLString)},
		Produit:{type:GraphQLNonNull(GraphQLString)},





    })
})
module.exports= IdentificationType;