module.exports = function(registration_number){
  switch(registration_number){
        case "CY":
      return "Bellville";
        case "CJ":
      return "Paarl";
        case "CA":
		  
var result=fromWhere("CY");
      return "Cape Town";
      
    default:
      return "Some other place!";
       }
}