function isCreditCardalid(digitArr)
{
    var lastDigit = digitArr[digitArr.length - 1];
    var sum = 0;

    digitArr.pop();

    for (let i = digitArr.length - 1; i > 0; i -= 2) {
        digitArr[i] = digitArr[i] * 2;
        if (digitArr[i] > 9) {
            digitArr[i] = digitArr[i] - 9;
        }
    }
    console.log(digitArr);
    for (let i = 0; i < digitArr.length; i++) {
        sum += digitArr[i];
    }
    sum += lastDigit;
    return sum % 10 == 0;
}

digitArr = [5, 2, 2, 8, 2];
console.log(isCreditCardalid(digitArr));