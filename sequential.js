public class SequentialSearch {
    public static boolean search(int[] list, int key) {
        for (int i = 0; i < list.length; i++) {
            if (list[i] == key) {
                return true;
            }
        }
        return false;
    }
}
