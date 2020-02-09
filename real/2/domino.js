
var minDominoRotations = function(A, B) {
    const doubleOccurances = [ 0, 0, 0, 0, 0, 0, 0, ];
    const occurances = [ 0, 0, 0, 0, 0, 0, 0, ];
    const occurancesA = [ 0, 0, 0, 0, 0, 0, 0, ];
    const occurancesB = [ 0, 0, 0, 0, 0, 0, 0, ];

    for (let i = 0; i < A.length; ++i) {
        const a = A[i];
        const b = B[i];
        occurances[a]++;
        occurancesA[a]++;
        occurancesB[b]++;

        if (a !== b) {
            occurances[b]++;
        }
        else {
            doubleOccurances[b]++;
        }
    }

    let i;
    for (i = 1; i < occurances.length; ++i) {
        if (occurances[i] === A.length) {
            break;
        }
    }

    if (i === occurances.length) {
        return -1;
    }

    if (occurancesA[i] === A.length) {
        return 0;
    }

    debugger;
    return Math.min(occurancesA[i], occurancesB[i]) - doubleOccurances[i];
};

const A = [2,1,2,4,2,2];
const B = [5,2,6,2,3,2];

minDominoRotations(A, B);

