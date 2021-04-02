const PaysSchema = new mongoose.Schema({
	Pays_partenaires_Trade_Map:String,Continent:String,Region:String,Capitale:String,Superficie:String,Langue_officielle:String,Langue_du_Business:String,IDH:String,Monnaie:String,Conversion_USD:String,Regime_politique:String,PIB_2009_USD:String,
  });
  export const Pays = mongoose.model('Pays',  PaysSchema);