//Reverse Array Values 
function reverse(arr)
{
    for (let i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    return arr;

}



function Rotate(arr, shiftBy)
{
    for (let j = Math.abs(shiftBy); j > 0; j--) {

        if (shiftBy > 0) {
            shiftRight(arr);
        } else {
            shiftLeft(arr);
        }
    }
    return arr;
}

function shiftRight(arr)
{
    let temp = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
}
function shiftLeft(arr)
{
    let temp = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
}



function filterRange(arr, min, max)
{
    var j = 0;
    var numberOfElementsToRemove = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > min && arr[i] < max) {
            arr[j] = arr[i];
            j++;
        } else {
            numberOfElementsToRemove++;
        }
    }

    while (numberOfElementsToRemove > 0) {
        arr.pop();
        numberOfElementsToRemove--;
    }

    return arr;
}

function concatArrays(firstArr, secondArr)
{
    var newArr = [];
    for (let i = 0; i < firstArr.length + secondArr.length; i++) {

        if (i < firstArr.length) {
            newArr[i] = firstArr[i];
        }
        else {
            newArr[i] = secondArr[i - firstArr.length];
        }
    }

    return newArr;
}

var arr = [1, 2, 3, 4, 5, 6]
//console.log(concatArrays(['a', 'b'], [1, 2, 3, 54]))
//console.log(filterRange(arr, 1, 6))
//console.log(Rotate(arr, -1))
//console.log(Reverse(arr))c