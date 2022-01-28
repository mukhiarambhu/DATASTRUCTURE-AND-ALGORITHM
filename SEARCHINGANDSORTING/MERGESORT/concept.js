//time complexity is O(n log n)
//sorting by splitting array


function mergerSort(array){
    //check if can be split i.e length greater than 2
    if(array.length<2) return array

    //get the middle index;
    const middle = Math.floor(array.length/2)

    //split array in two side
    const leftSide=array.slice(0,middle)
    const rightSide=array.slice(middle)
   
    //use recursion to continue splitting

    return merge(mergerSort(leftSide),mergerSort(rightSide))

}

function merge(left,right){
    //create new array 
    let result=[]

    //check if either left array and right array is empty
    while(left.length && right.length){
        //find lower value;
        if(left[0]<= right[0]){
            //add left value
            result.push(left.shift())
        }else{
            //add right value
            result.push(right.shift())
        }

    }
    //merge left array
    while(left.length) result.push(left.shift())

    //merge right array
    while(right.length) result.push(right.shift())
   
    return result
}

let array=[6,2,8,4,1,9,0]
console.log(mergerSort(array))