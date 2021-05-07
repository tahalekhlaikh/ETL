const{

    GraphQLObjectType,
    GraphQLString,

    GraphQLNonNull,
	GraphQLID
} = require('graphql')

 const Exportation_Maroc_Type =new GraphQLObjectType({
    name:'exportation_maroc',
    fields:()=>({
		id:{type:GraphQLID},



		Monde_Afrique:{type:GraphQLNonNull(GraphQLString)},
		Exportations_du_Maroc_2019:{type:(GraphQLString)},
		TCAM_2012_2019:{type:GraphQLNonNull(GraphQLString)},
		Part_du_marche:{type:GraphQLNonNull(GraphQLString)},
		Classement:{type:GraphQLNonNull(GraphQLString)},
		Produit:{type:GraphQLNonNull(GraphQLString)},




    })
})
module.exports=Exportation_Maroc_Type;