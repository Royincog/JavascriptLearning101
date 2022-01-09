//Todo Controller
let todoController = (
    function(){
  //somecode
   let TodoObject = function(id,descriptions){
    this.id = id;
    this.descriptions = descriptions;
   };

   let todoArrayObject = {
       todoArray: []
   }

    return {
        addItem : function(des){
         //Create a new Id   
         ID = 0;//todoArrayObject.todoArray[todoArrayObject.todoArray.length - 1].id + 1;   
         //Create new Item
         let todoItem = new TodoObject(ID,des);
         todoArrayObject.todoArray.push(todoItem);
         
         //Return the new Element
         return todoItem;   
        },
        getItemList : function(){
            return todoArrayObject;
        }
    }    

}
)();

//UI controller
let todointerfacecontroller = (function(){
    
    //function to get input 
    var domStrings = {
        todoInput : '#todoinput',
        submitButton : '#todoSubmit'
    }
   
    return {
      
        getinput: function(){
        var inputValue = document.querySelector(domStrings['todoInput']).value
            return {inputValue : inputValue};    
        },
        getDomStrings : () => { return domStrings }

    }


})();


//Global App Controller
let appController = (function(todoCntrl,todoInterfaceCntrl){
//somecode
let DOMStrings = todoInterfaceCntrl.getDomStrings();

let setupEventListeners = function (){
    //Get the button
    document.querySelector(DOMStrings.submitButton).addEventListener('click',cntrlAddItem);
    document.addEventListener('keypress',(event) => {
        if(event.code == "Enter"){
        cntrlAddItem();
        }
    })
    };

let cntrlAddItem = function (){
    //1. Get the input data
    let inputfromUicontroller = todoInterfaceCntrl.getinput();
    //2. Add the item todoController

    let newItem = todoCntrl.addItem(todoInterfaceCntrl.getinput().inputValue);
    //3. Add new item to todoInterfaceCntrl to UI
    //4. Also Delete the Todo
    console.log(newItem);
    console.log(todoCntrl.getItemList());
}


 return {
     init: function(){
         console.log("App started");
         setupEventListeners();
     }
 }
    

})(todoController,todointerfacecontroller);
appController.init();