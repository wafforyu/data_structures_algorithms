package data_structures;

public class Array {
    public static int[] remove(int[] arr, int index){
        int[] newArr = new int[arr.length-1];
        for (int i = 0, j = 0; i < arr.length-1; i++, j++) {
            if (i == index)
                newArr[i] = arr[++j];
            newArr[i] = arr[j];
        }
        return newArr;
    }

    public static void traverse(int[] arr) {
        for (int i = 0; i < arr.length; i++)
            System.out.print(arr[i] + " ");
    }
}
