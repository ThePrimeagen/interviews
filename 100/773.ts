const finalState = JSON.stringify([[1,2,3], [4,5,0]]);

function isSolved(state) {
    return JSON.stringify(state) === finalState;
}

// lets move!
const movements = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
];

function slidingPuzzle(state) {
    const out = solve(state);
    if (out === Number.MAX_VALUE) {
        return -1;
    }

    return out;
}

function solve(state, depth = 0, seen = {}) {

    let iQ = [];
    const oQ = [state];

    let solved = false;
    let currentDepth = 0;

    do {
        iQ = oQ.slice();
        oQ.length = 0;

        while (!solved && iQ.length) {
            const curr = iQ.pop();
            if (isSolved(curr)) {
                solved = true;
                break;
            }

            const key = JSON.stringify(curr);
            if (seen[key]) {
                continue;
            }
            seen[key] = true;

            let zeroIdx = curr[0].indexOf(0);
            let listIdx = 0;
            if (zeroIdx === -1) {
                listIdx = 1;
                zeroIdx = curr[1].indexOf(0);
            }

            let x, y;
            for (let i = 0; i < movements.length; ++i) {
                x = zeroIdx + movements[i][0];
                y = listIdx + movements[i][1];

                if (x < 0 || x > 2 || y < 0 || y > 1) {
                    continue;
                }


                const nextChild = curr.map(x => x.slice());
                nextChild[listIdx][zeroIdx] = nextChild[y][x];
                nextChild[y][x] = 0;

                oQ.push(nextChild);
            }
        }

        if (!solved) {
            currentDepth++;
        }
    } while (!solved && oQ.length);

    if (solved) {
        return currentDepth;
    }
    return -1;
}

console.log(solve([[1,2,3],[5,4,0]]));

