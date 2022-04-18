
function minToFront(arr)
{
    var minValueOfArray = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < minValueOfArray) {
            minValueOfArray = arr[i];
            var index = i;
        }
    }
    pushFront(arr, index)
    return arr;
}

function pushFront(arr, index)
{
    var temp = arr[index];
    for (let i = index; i >= 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    return arr;
}

var arr = [4, 1, 5, 3, 2];
console.log(minToFront(arr));