import java.util.Arrays;
import java.util.Scanner;

public class BinarySearch {
    public static int search(int[] list, int key) {
        int low = 0;
        int high = list.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (list[mid] == key) {
                return mid;
            } else if (list[mid] < key) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of elements in the list: ");
        int n = scanner.nextInt();
        int[] list = new int[n];
        System.out.println("Enter the elements of the list: ");
        for (int i = 0; i < n; i++) {
            list[i] = scanner.nextInt();
        }
        Arrays.sort(list);
        System.out.print("Enter the key element to be searched: ");
        int key = scanner.nextInt();
        int index = search(list, key);
        if (index != -1) {
            System.out.println("Key element " + key + " found at index " + index);
        } else {
            System.out.println("Key element " + key + " not found in the list.");
        }
    }
}
