
module.exports = function(items,threshold){
  var threshList=[];
  for (i=0; i< items.length; i++){
     var fruits = items[i];
    var name= fruits.name;
    var quantity= fruits.qty;
    
    if(quantity>threshold){
      threshList.push(items[i]);
    }
    
  }
  console.log(JSON.stringify(threshList));
  return threshList;
}

