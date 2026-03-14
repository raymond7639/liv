#include <stdio.h>
#include <stdlib.h>

long arrayManipulation(int n, int m, int queries[][3])
{
    long *arr = calloc(n + 2, sizeof(long));

    for(int i = 0; i < m; i++)
    {
        int a = queries[i][0];
        int b = queries[i][1];
        int k = queries[i][2];

        arr[a] += k;
        arr[b + 1] -= k;
    }

    long max = 0;
    long sum = 0;

    for(int i = 1; i <= n; i++)
    {
        sum += arr[i];
        if(sum > max)
            max = sum;
    }

    free(arr);
    return max;
}

int main()
{
    int queries[3][3] = {
        {1,2,100},
        {2,5,100},
        {3,4,100}
    };

    printf("%ld\n", arrayManipulation(5,3,queries));
}