
function whatIsInAName(collection, source) {
  // returns an array comprised of shared key-value pairs between two objects
  var arr = [];
  // Only change code below this line
  arr = collection.filter(function(input) {
    for (var i in source) {
      if (source[i] != input[i]) {
        return false;
      }
    }
    return true;
    
  });
  
  // Only change code above this line
  return arr;
}
