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
         if(todoArrayObject.todoArray.length > 0){  
         ID = todoArrayObject.todoArray[todoArrayObject.todoArray.length - 1].id + 1;   
         }
         else{
             ID = 0;
         }
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
        submitButton : '#todoSubmit',
        todocontainer : '#todocontainer'
    }
   
    return {
      
        getinput: function(){
        var inputValue = document.querySelector(domStrings['todoInput']).value
            return {inputValue : inputValue};    
        },
        getDomStrings : () => { return domStrings },
        addListItem: function(object){
            let html,newHtml;

            html =  '<div class="row"><table class="u-full-width"><thead><tr><th>Todos</th></tr></thead><tbody><tr><td id = "todo-%id%">%description%</td></tr></tbody></div>';

            newHtml = html.replace('%id%',object.id);
            newHtml = newHtml.replace('%description%',object.descriptions);
            if(object.id == 0){
            document.querySelector(domStrings['todocontainer']).insertAdjacentHTML('beforeend',newHtml);
            }
            else{
               let tableHtml = newHtml.split('<tbody>')[1].split('</tbody>')[0];
                document.querySelector(domStrings['todocontainer']).insertAdjacentHTML('beforeend',tableHtml);
            }
        }

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
    todoInterfaceCntrl.addListItem(newItem);
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