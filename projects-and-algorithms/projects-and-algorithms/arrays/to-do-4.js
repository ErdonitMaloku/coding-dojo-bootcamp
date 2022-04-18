function Shuffle(arr)
{
    var currentIndex = arr.length;
    while (currentIndex > 0) {
        var randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        var temp = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temp;

    }

    return arr;
}

arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(Shuffle(arr));