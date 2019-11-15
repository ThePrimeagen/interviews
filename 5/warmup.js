
function solveThat(str) {
    let longestScore = 0;
    let currentCount = 0;
    let currentScore = 0;

    for (let i = 0; i < str.length; ++i) {
        const isClose = str[i] === ')';
        currentCount += isClose ? -1 : 1;

        if (currentCount < 0) {
            currentCount = 0;
            currentScore = 0;
            continue;
        }

        if (isClose) {
            currentScore += 2;
        }

        if (currentScore > longestScore) {
            longestScore = currentScore;
        }
    }

    return longestScore;
}


console.log(solveThat(")()())((((((((((("));

