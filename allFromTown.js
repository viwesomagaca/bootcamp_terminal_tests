module.exports = function(RegNo,code){
  var separate = RegNo.split(',');

  console.log(separate);
 var newL=[];
 for (i=0; i< separate.length; i++){
  var result= separate[i].trim();
  
   if(result.startsWith(code)){
     newL.push(separate);
  }
}
console.log(newL.length);
return newL.length;
}
