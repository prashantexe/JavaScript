class Stack {
    int[] stack;
    int top;

    Stack() {
        stack = new int[10];
        top = -1;
    }

    void push(int item) {
        if (top == 9) {
            System.out.println("Stack overflow");
        } else {
            top++;
            stack[top] = item;
        }
    }

    int pop() {
        if (top == -1) {
            System.out.println("Stack underflow");
            return -1;
        } else {
            int item = stack[top];
            top--;
            return item;
        }
    }

    boolean isEmpty() {
        if (top == -1) {
            return true;
        } else {
            return false;
        }
    }
}
