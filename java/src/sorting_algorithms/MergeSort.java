package sorting_algorithms;
import java.util.Arrays;

public class MergeSort {
    static void merge(int arr[], int l, int m, int r) {
        int L[] = new int[m-l+1];
        int R[] = new int[r-m];

        for (int i = 0; i < L.length; ++i) L[i] = arr[l + i];
        for (int j = 0; j < R.length; ++j) R[j] = arr[m + 1 + j];

        int i = 0, j = 0, k = l;

        while (i < L.length && j < R.length) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++; }
            else {
                arr[k] = R[j];
                j++; }
            k++;
        }

        while (i < L.length) {
            arr[k] = L[i];
            i++;
            k++; }
        while (j < R.length) {
            arr[k] = R[j];
            j++;
            k++; }
    }

    static void sort(int arr[], int l, int r) {
        if (l < r) {
            int m =(l+r)/2;
            sort(arr, l, m);
            sort(arr, m + 1, r);
            merge(arr, l, m, r); }
    }

    public static void main(String args[]) {
        int arr[] = { 12, 11, 13, 5, 6, 7 ,3,1,12,312,3,124,23,545,63,457,56,745,654,12,312,31,23,124,234,0};
        System.out.println(Arrays.toString(arr));
        sort(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }
}