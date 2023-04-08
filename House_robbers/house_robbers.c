#include <stdio.h>

void robber(int arr[], int size)
{
    int result = 0;
    for (int i = 0; i < size; i++)
    {
        if (i % 2 == 0)
        {
            result += arr[i];
        }
    }
    printf("%d\n", result);
}
int main()
{
    // int arr[] = {1, 2, 3, 1};
    int arr[] = {2, 7, 9, 3, 1};
    int size = sizeof(arr) / sizeof(arr[0]);
    robber(arr, size);
    return 0;
}
