//Object.create Method
var Student = {
    rollNo : Math.random()
}

var aStudent = Object.create(Student,{
    name : {value :'Roy'},
    standard : {value : '10th'}
})

console.log(aStudent);