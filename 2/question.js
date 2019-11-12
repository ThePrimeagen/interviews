/*
printTime(9, 0) // nine o'clock
printTime(9, 15) // quarter past nine
printTime(9, 30) // half past nine
printTime(9, 45) // quarter to ten

# Hours
1.  Hour of day? can it be 24 hours
  - Yes its 24 hours
2.  I assume 0 is midnight
  - 12 is noon

# Minutes
0 - 59

o clock 53 - 7
quarter past 8 - 23
half past 24 - 37
quarter to 38 - 52
*/
const valueToName = {
    0: 'twelve',
    1: 'one',
    2: 'two',
    9: 'nine',
    10: 'ten',
    //...
    11: 'eleven' // this is not a stranger things plug... or is it
};

function isOClock( minute ) {
    return minute >= 53 || minute <= 7;
}

function isQuarterPast(minute) {
    return minute >= 8 && minute <= 23;
}

function isHalfPast(minute) {
    return minute >= 24 && minute <= 37;
}

function addOneForQuarterTo(minute) {
    return minute >= 37;
}

function isMidnightOrNoon(hour, minute) {
    return (hour === 11 || hour === 12 || hour === 0 || hour === 23) && isOClock(minute);
}

const oclock = 'o\'clock';
function printTime(hour, minute) {
    if (isMidnightOrNoon(hour, minute)) {
        return hour === 0 ? 'midnight' : 'noon';
    }

    let endonym = valueToName[ hour % 12 ];
    let qualifier = 'quarter to';
    if (isOClock(minute)) {
        qualifier = 'o\'clock';
    }
    else if (isQuarterPast(minute)) {
        qualifier = 'quarter past';
    }
    else if (isHalfPast(minute)) {
        qualifier = 'half past';
    }
    else if (addOneForQuarterTo(minute)) {
        endonym = valueToName[(hour + 1) % 12];
    }

    const retVal = qualifier === oclock ? [endonym, qualifier] :
        [qualifier, endonym];

    return retVal.join(' ');
}

console.log(printTime(9, 0)) // nine o'clock
console.log(printTime(9, 15)) // quarter past nine
console.log(printTime(9, 30)) // half past nine
console.log(printTime(9, 45)) // quarter to ten
console.log(printTime(21, 45)) // quarter to ten
console.log(printTime(0, 7)); // midnight
console.log(printTime(11, 53)); // noon
console.log(printTime(12, 8)); // quarter past twelve

const cache = new Map();
function memoize() {
    return function() {
    };
}
