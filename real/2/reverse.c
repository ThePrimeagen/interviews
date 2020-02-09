int reverse(int x) {
    long r = 0;
    int dir = (x < 0 ? -1 : 1);

    while (x) {
        r *= 10;

        int remainder = x % 10;
        r += remainder * dir;

        x /= 10;
    }

    if (r > (((long)2) << 31 - 1)) {
        return 0;
    }

    return r * dir;
}




