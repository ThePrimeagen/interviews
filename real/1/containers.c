#include <stdio.h>

int min(int a, int b) {
    return a < b ? a : b;
}

int max(int a, int b) {
    return a < b ? b : a;
}

int maxArea(int* numbers, int len) {
    int maxA = 0;
    for (int i = 0; i < len; ++i) {
        int a = numbers[i];

        for (int j = i + 1; j < len; ++j) {
            int b = numbers[j];
            int width = j - i;
            int height = min(a, b);

            maxA = max(maxA, width * height);
        }
    }

    return maxA;
}

int main() {
    int numbers[] = {
        1,8,6,2,5,4,8,3,7
    };


    printf("Look at my answer %d\n", maxArea(numbers, 9));

    return 0;
}


