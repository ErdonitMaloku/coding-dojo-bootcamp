
function rBinarySearch(arr, targetValue)
{
    var counter = 0;
    var min = 0;
    var max = arr.length - 1;
    var guessIndex;

    while (max >= min) {
        guessIndex = Math.floor((min + max) / 2);
        counter++;

        if (arr[guessIndex] === targetValue) {
            return true;
        } else if (arr[guessIndex] < targetValue) {
            rBinarySearch(arr, guessIndex);
        }
    }

}