#include <cstdio>
#include <vector>

int main() {
    printf("love me printf\n");

    // [10, 9, 2, 5, 3, 7, 101, 18] => [2, 3, 7, 101]
    // [10, 9, 2, 5, 3, 7, 101, 18] => [2, 5, 7, 101]
    //
    // get the longest increasing subsequence, you can remove numbers as you go.
    // notice that the solution has the number 5 dropped.
    int sequence[] = {10, 9, 2, 5, 3, 7, 101, 18};
                   // [ 2, 2, 4, 3, 3, 2,   1,  1]; // N^2 additional +N or
                                                    // complication

    /*
    int len = sizeof(sequence) / sizeof(int);
    if (len == 0) {
        return 1;
    }

    for (int i = 0; i < len; ++i) {
        Node curr = {i};

        for (int j = i + 1; j < len; ++j) {
        }
    }
    */

    /*
     * i++
     *
     * int t = i;
     * i = i + 1
     * return t
     *
     * ++i
     *
     * i = i + 1
     * return i
     */
    int len = sizeof(sequence) / sizeof(int);
    if (len == 0) {
        return 1;
    }
    printf("Look at my length %d\n", len);

    int longAmount[len];

    // Assume the questioner is an adult and will not say, WHAT ABOUT A LENGTH
    // OF 0;
    longAmount[len - 1] = 1;

    int maxCount = 1;
    int start = 1;
    int stop = 1;

    for (int i = len - 2; i >= 0; --i) {
        int thisMaxCount = 1;
        for (int j = i + 1; j < len; ++j) {
            if (sequence[i] < sequence[j]) {
                int count = longAmount[j] + 1;
                if (count > maxCount) {
                    maxCount = count;
                }
                if (count > thisMaxCount) {
                    thisMaxCount = count;
                }
            }
        }

        longAmount[i] = thisMaxCount;
    }

    printf("LOOK AT THAT MAX %d\n", maxCount);

    // Construction of graph N^2
    // Walk Backwards: Math.max(N + E)
    //
    // length 2
    // 10 -> 101
    //    -> 18
    //
    // length 2
    // 9  -> 101
    //    -> 18
    //
    // length 4
    // 2  -> 5
    //    -> 3
    //    -> 7
    //    -> 101
    //    -> 18
    //
    // 5  -> 7
    //    -> 101
    //    -> 18
    //
    // 3  -> 7
    //    -> 101
    //    -> 18
    //
    // 7  -> 101
    //    -> 18
    //
    // 101 -> x
    //
    // 18  -> x

    return 0;
}

