const{

    GraphQLObjectType,
    GraphQLString,

    GraphQLNonNull,
	GraphQLID
} = require('graphql')

 const File_Type =new GraphQLObjectType({
    name:'Files',
    fields:()=>({
		id:{type:GraphQLID},



		nom:{type:GraphQLNonNull(GraphQLString)},
		Produit:{type:GraphQLNonNull(GraphQLString)},
		Secteur:{type:GraphQLNonNull(GraphQLString)},
		Filiere:{type:GraphQLNonNull(GraphQLString)},






    })
})
module.exports= File_Type;