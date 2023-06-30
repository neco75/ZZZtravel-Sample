#include <stdio.h>

int ackermann(int m, int n)
{
    if (m == 0)
    {
        printf("[m==0]:%d+1\n", n);
        return n + 1;
    }
    else if (n == 0)
    {
        printf("[n==0]:A(%d-1, 1)\n", m);
        return ackermann(m - 1, 1);
    }
    else
    {
        printf("A(%d-1, A(%d, %d-1))\n", m, m, n);
        return ackermann(m - 1, ackermann(m, n - 1));
    }
}

int main()
{
    int m = 2;
    int n = 0;
    int result = ackermann(m, n);
    printf("A(%d, %d) = %d\n", m, n, result);
    return 0;
}