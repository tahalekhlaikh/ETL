const{

    GraphQLObjectType,
    GraphQLString,

    GraphQLNonNull,
	GraphQLID
} = require('graphql')

 const Potentiel_exportation_afrique_Type =new GraphQLObjectType({
    name:'Potentiel_exportation_afrique_Type',
    fields:()=>({
		id:{type:GraphQLID},
        Pays:{type:GraphQLNonNull(GraphQLString)},

		Potentiel_exportation:{type:GraphQLNonNull(GraphQLString)},
		Exportations_actuelles:{type:GraphQLNonNull(GraphQLString)},
        Potentiel_inexploite:{type:GraphQLNonNull(GraphQLString)},
		Produit:{type:GraphQLNonNull(GraphQLString)},




    })
})
module.exports= Potentiel_exportation_afrique_Type;