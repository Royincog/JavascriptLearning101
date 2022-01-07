var anArray = new Array('Apple','Orange','Mango');
anArray[0] = 'new Fruit';
anArray.unshift('Apple');
//Shit to pop out from first index
anArray.shift();
console.log("The an array info ", anArray);
console.log(anArray.indexOf('Mango'));