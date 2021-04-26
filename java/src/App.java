import data_structures.*;

public class App {
    public static void main(String[] args) {
        int[] n = {4,12,-2,3,1,5,8};

        Array.traverse(n);
        n = Array.remove(n,3);
        System.out.println();
        Array.traverse(n);
        n = Array.remove(n, 2);
        System.out.println();
        Array.traverse(n);
        n = Array.append(n, 99);
        System.out.println();
        Array.traverse(n);
        System.out.println();
        System.out.println(Array.linearSearch(n, 63));
    }
}