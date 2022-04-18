
var arr = [1, 1, 2, 2, 3, 4]

//Push Front 
function pushFront(arr, additionalValue)
{

    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }
    arr[0] = additionalValue;
    return arr;
}


//Pop Front 
function popFront(arr)
{
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr.pop();
    return arr;

}

function insertAt(arr, index, additionalValue)
{
    for (let i = arr.length - 1; i >= index; i--) {
        arr[i + 1] = arr[i];
    }
    arr[index] = additionalValue;

    return arr;
}


function removeAt(arr, index)
{
    var elementToRemove = arr[index];
    for (let i = index; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();

    return elementToRemove;

}

function swapPairs(arr)
{
    for (let i = 0; i < arr.length - 1; i = i + 2) {

        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }

    return arr;
}

function removeDuplicates(arr)
{
    var newArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] != arr[i + 1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(removeDuplicates(arr))
//console.log(swapPairs(arr))
//console.log(removeAt(arr, 0))
//console.log(insertAt(arr, 1, 20))
//popFront(arr);
//pushFront(arr, 200);

