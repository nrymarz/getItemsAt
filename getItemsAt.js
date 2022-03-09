function getItemsAt(arr,par){
    if(arr.length === 0) return []
    numIsEvenOrOdd = arr.length%2 === 0 ? 'even' : 'odd'
    if(numIsEvenOrOdd === par) return [arr[0]].concat(getItemsAt(arr.slice(1),par))
    else return getItemsAt(arr.slice(1),par)
}

console.log(getItemsAt([2,4,6,8,10],'odd'))
console.log(getItemsAt(["E", "D", "A", "B", "I", "T"], "even"))
console.log(getItemsAt([")", "(", "*", "&", "^", "%", "$", "#", "@", "!"], "even"))
console.log(getItemsAt(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "even"))
