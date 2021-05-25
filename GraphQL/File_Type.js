const{

    GraphQLObjectType,
    GraphQLString,

    GraphQLNonNull,
	GraphQLID,
	GraphQLBoolean
} = require('graphql')

 const File_Type =new GraphQLObjectType({
    name:'Files',
    fields:()=>({
		id:{type:GraphQLID},



		nom:{type:GraphQLNonNull(GraphQLString)},
		Produit:{type:GraphQLString},
		Secteur:{type:GraphQLString},
		Filiere:{type:GraphQLString},
		year:{type:GraphQLString},
		choosen:{type:GraphQLBoolean},






    })
})
module.exports= File_Type;