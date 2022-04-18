function rSigma(num)
{
    if (num > 0) {
        return rSigma(num - 1) + num;
    }
    return 0;
}
console.log(rSigma(3));


function rFact(num)
{
    if (num == 0 || num < 0) {
        return 1;
    }

    if (!Number.isInteger(num)) {
        num = Math.trunc(num)
    }

    return rFact(num - 1) * num;
}

//console.log(rFact(6.5));
///console.log(rSigma(2.5));