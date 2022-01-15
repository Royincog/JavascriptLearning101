let binarySearch = function(array,length,numberToSearch) {


    let low = 0,high = length - 1;
    while(low<=high) {

        let mid = Math.floor((low + high) / 2);


        if(array[mid] === numberToSearch) {
            return mid;
        }
        else if(array[mid] > numberToSearch) {
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return -1;
}

let binarySearchRecursive = function(array,low,high,numberToSearch) {
 
    let mid = Math.floor((low + high) / 2);
    
    if(array[mid] === numberToSearch) 
    {
    return mid;
    }
    else if(array[mid] > numberToSearch){
    return binarySearchRecursive(array,low,mid-1,numberToSearch);
    }
    else{
   return binarySearchRecursive(array,mid+1,high,numberToSearch);
    }
    }


let array = [10,11,21,33,45,56,66,89,99];

let result = binarySearch(array,array.length,56);
let recursiveResult = binarySearchRecursive(array,0,array.length,56);
console.log(result);
console.log(recursiveResult);