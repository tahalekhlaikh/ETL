const{

    GraphQLObjectType,
    GraphQLString,

    GraphQLNonNull,
	GraphQLID
} = require('graphql')

 const Principaux_exportateurs_africains_Type =new GraphQLObjectType({
    name:'Principaux_exportateurs_africains',
    fields:()=>({
		id:{type:(GraphQLString)},

        Pays:{type:(GraphQLString)},

		PDM_2019:{type:(GraphQLString)},
		TCAM_2012_2019:{type:(GraphQLString)},
        Produit:{type:(GraphQLString)},
        Exportations_2019:{type:(GraphQLString)},



    })
})
module.exports= Principaux_exportateurs_africains_Type;