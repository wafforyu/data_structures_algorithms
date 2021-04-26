import sorting_algorithms.BubbleSort;
import sorting_algorithms.InsertionSort;
import sorting_algorithms.SelectionSort;

import java.util.Arrays;
public class App {
    public static void main(String[] args) {
        int[] n = {5,4,2,3,6,7};

        System.out.println(Arrays.toString(BubbleSort.bubbleSort(n)));
        System.out.println(Arrays.toString(InsertionSort.insertionSort(n)));
        System.out.println(Arrays.toString(SelectionSort.selectionSort(n)));
    }
}
