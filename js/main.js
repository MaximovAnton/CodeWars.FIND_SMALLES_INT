document.querySelector('.out').innerHTML = findSmallestInt([40,23,45,67,34,65])

console.log(findSmallestInt([70,534,576,3,345,-5]))
console.log(findSmallestInt([32,36,21,4,34,7]))

function findSmallestInt(arr){
    let currentMin = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < currentMin) currentMin = arr[i]
    }
    return currentMin
}

console.log(findSmallestIntMath([4,-50, -233, 54, 88]))

function findSmallestIntMath(arr){
    return Math.min(...arr)
}

