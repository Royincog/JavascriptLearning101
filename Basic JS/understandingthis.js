console.log('From global console log',this) //this will always point to Global wiindoww object

//Also inside functions regular normal functionssss
function somefunction(){
    console.log('From regular function',this) //this will always point to Global Object
}
somefunction();
let somefvariable =function() {
    return 'abc'
};
let aFruit = {
    name : 'Apple',
    color : 'Red',
    random : Math.random,
   truColor : this,//sets to windows global
    size : function(){
        console.log('Something about this in object',this); //reffering to the current object inside the function object
        //this.truColor  = this.color + ' purplish' //change this object
        return this.random;
    }
    
}
console.log(somefvariable())
aFruit.size();
console.log(aFruit);
