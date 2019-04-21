package hari15.forstatement;

public class ForStatementChallenge {
    public static void main(String[] args) {
        /*
        create a for statement using any range of numbers
        determine if the number is a prime number using the isPrime method
        if it is a prime number, print it out AND increment a count of the number of prime numbers found.
        if that count is 3 exit the for loop
        using break keyword.
         */
        int count = 0;
        for (int index = 0; index <= 100; index++) {
            if (count == 3) {
                System.out.println("exiting for loop");
                break;
            } else if (isPrime(index)) {
                System.out.println(index);
                count++;
            }
        }

        count = 0;
        for (int index = 100; index >= 0; index--) {
            if (count == 3) break;
            else if (isPrime(index)) {
                System.out.println(index);
                count++;
            }
        }
    }

    private static boolean isPrime(int n) {
        if (n <= 1) {
            return false;
        }
        for (int i = 2; i <= n / 2; i++) {
            System.out.println("Looping i = " + i);
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}
