function removeNegatives(arr)
{
    var j = 0;
    var numberOfElementsToRemove = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
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

function secondtoLast(arr)
{
    if (arr.length < 2) {
        return null;
    }
    secondToLastElementPosition = arr.length - 2;
    return arr[secondToLastElementPosition];

}

function secondLargest(arr)
{
    if (arr.length < 2) {
        return null;
    }
    var max = Number.MIN_VALUE;

    for (let i = 0; i < arr.length; i++) {
        secondLastMax = max;
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return secondLastMax;
}

function getNthToLastElement(arr, index)
{
    nthToLastElement = arr.length - index;

    if (arr.length < index) {
        return null;
    }

    return arr[nthToLastElement];

}
//Given arr and N, return the Nth-largest element, where (N-1) elements are larger. Return null if needed.
function getNthLargestElement(arr, n)
{

}
var arr = [5, 2, 3, 6, 4, 9, 7]
console.log(nthToLast(arr, 3))
//console.log(secondtoLast(arr))
//console.log(removeNegatives(arr))