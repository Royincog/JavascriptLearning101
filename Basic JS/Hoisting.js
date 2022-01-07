calculateAge(1996);
function calculateAge(year){
    console.log(2022 - year);
    }
// retirement(1976) //not work because hoisting

var retirement = function(year){
    console.log(65 - (2022 - year));
}    
   retirement(1996)

   var somefunction = function(){
       let name = "Roy";
       return name;
   }
   function anotherfunction(somefunction){
       console.log("The object ", this.somefunction());
   }
   anotherfunction(somefunction)