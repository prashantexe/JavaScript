import java.util.Scanner;

public class Arithmetic_Mean
{
    public static void main(String args[])
    {
        int n, i, sum=0, armean;
        int arr[] = new int[50];
        Scanner scan = new Scanner(System.in);
                
        System.out.print("How many Number you want to Enter ? ");
        n = scan.nextInt();
                
        System.out.print("Enter " +n+ " Numbers : ");
        for(i=0; i<n; i++)
        {
            arr[i] = scan.nextInt();
            sum = sum + arr[i];
        }
                
        armean = sum/n;
                
        System.out.print("Arithmetic Mean = " +armean);
    }
}