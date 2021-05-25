const{

    GraphQLObjectType,
    GraphQLString,

    GraphQLNonNull,
	GraphQLID
} = require('graphql')

 const Principaux_importateurs_mondiaux_Type =new GraphQLObjectType({
    name:'Principaux_importateurs_marche_mondial',
    fields:()=>({

		id:{type:GraphQLID},

        Pays:{type:GraphQLNonNull(GraphQLString)},

		PDM_2019:{type:GraphQLNonNull(GraphQLString)},
		TCAM_2012_2019:{type:GraphQLNonNull(GraphQLString)},
        Produit:{type:GraphQLNonNull(GraphQLString)},
        Importations_2019:{type:GraphQLNonNull(GraphQLString)},



    })
})
module.exports= Principaux_importateurs_mondiaux_Type;