module.exports = function(plates,Loc) {
  var isFrom = plates.endsWith(Loc);
  console.log("Plates with registration "+ plates+ " are from :" +Loc);
  return isFrom;
}

