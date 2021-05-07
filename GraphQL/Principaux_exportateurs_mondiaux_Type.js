const{

    GraphQLObjectType,
    GraphQLString,

    GraphQLNonNull,
	GraphQLID
} = require('graphql')

 const Principaux_importateurs_mondiaux_Type =new GraphQLObjectType({
    name:'Principaux_exortateurs_marche_mondial',
    fields:()=>({
		id:{type:GraphQLID},

        Pays:{type:GraphQLNonNull(GraphQLString)},

		PDM_2019:{type:GraphQLNonNull(GraphQLString)},
		TCAM_2012_2019:{type:GraphQLNonNull(GraphQLString)},
        Produit:{type:GraphQLNonNull(GraphQLString)},
        Exportations_2019:{type:GraphQLNonNull(GraphQLString)},



    })
})
module.exports= Principaux_importateurs_mondiaux_Type;