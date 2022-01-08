function demoClosure(input, output) {
    let numone = 100

    return (element) => {
            console.log(input + output + numone + element) ;
            console.log(this);
        }
}
demoClosure(100, 100)(100);

//Let's map it like a Java interface
function fly(animal){

    return (thespecies) =>{
        if(thespecies instanceof animal){
            if(thespecies.canfly){
                console.log("Flying Animal");
            }
            else{
                console.log("Animal cannot fly");
            }
        }
       
    }
}
//fly is like our java interface and for that generic fly method we have a concrete flying nehavior implementation for each animal -- hihihi

let Animal = function(name,canfly){
this.name = name;
this.canfly = canfly;
}


let pig = new Animal('Pig',false);
let cat = new Animal('cat',false);
let bird = new Animal('bird',true);
let someflybehavior = fly(Animal)(cat);