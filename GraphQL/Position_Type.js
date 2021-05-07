const{

    GraphQLObjectType,
    GraphQLString,

    GraphQLNonNull,
	GraphQLID
} = require('graphql')

 const Position_Type =new GraphQLObjectType({
    name:'Position_du_Maroc',
    fields:()=>({
		id:{type:GraphQLID},
        Pays:{type:GraphQLNonNull(GraphQLString)},

		PDM_2019:{type:GraphQLNonNull(GraphQLString)},
		TCAM_2012_2019:{type:GraphQLNonNull(GraphQLString)},
        Produit:{type:GraphQLNonNull(GraphQLString)},
        Export_2019:{type:GraphQLNonNull(GraphQLString)},



    })
})
module.exports= Position_Type;