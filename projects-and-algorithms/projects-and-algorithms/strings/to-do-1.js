
function removeBlanks(sentence)
{
    var wordArray = sentence.split(" ");

    return wordArray.join("");
}

//var sentence = "Pl ayTha tF u nkyM usi c";
//console.log(removeBlanks(sentence))

function getDigits(sentence)
{
    var digit = '';
    for (let i = 0; i < sentence.length; i++) {

        if (isTheCharacterNumber(sentence[i])) {

            digit += sentence[i];
        } else {
            console.log('Character');
        }
    }
    return digit;

}

function isTheCharacterNumber(character)
{
    return character >= '0' && character <= '9';
}

//var sentence = "0s1a3y5w7h9a2t4?6!8?0";
//console.log(getDigits(sentence))


function getSentenceAcronym(sentence)
{
    var symbolsArray = ['-', '+', '~', '!', '@', '#', '$', '%', '^', '&', '*', ')', '(', '_', '=', '/'];
    var s = sentence.trim();
    var wordArray = s.split(" ");
    var acronym = '';

    for (let i = 0; i < wordArray.length; i++) {
        if (symbolsArray.includes(wordArray[i][0])) {
            acronym += wordArray[i][0];
            console.log(wordArray[i][0]);
        } else {
            acronym += (wordArray[i][0]).toUpperCase();
        }

    }
    return acronym;
}

//var sentence = " there's no free lunch - gotta pay yer way. "
//console.log(getSentenceAcronym(sentence))


function countNonSpaces(sentence)
{
    var wordArray = sentence.split(" ");

    return wordArray.join("").length;

}

var sentence = "Honey pie, you are driving me crazy"
console.log(countNonSpaces(sentence));

/*
    Remove Shorter Strings
Given a string array and value (length), remove any strings shorter than the length from the array.

*/
function removeShorterStrings(arr, length)
{
    var newArr = [];
    var j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= length) {
            newArr[j] = arr[i];
            j++;
        }
    }
    return newArr;
}

var arr = ['string', 'int', 'double', 'float', 'bool'];
console.log(removeShorterStrings(arr, 4))