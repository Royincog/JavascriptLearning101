let a = "Hey";

function first(){
    let b = "Hi";
    console.log(b)
    function second(){
        let c = "yola !"
        console.log(c + b)
        third();
    
    }

    function third(){
        console.log(b + a);
    }

}


