let Marche_mondial = require('../models/marche_mondial');
exports.identificationController=async (req,res)=>{
	//const march= await Marche_mondial.find({Pays:'Europe'})
	const march= await Marche_mondial.find()
res.json({
	March:march

})
}