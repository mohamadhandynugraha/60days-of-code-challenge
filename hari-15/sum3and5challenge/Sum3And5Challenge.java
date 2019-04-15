package hari15.sum3and5challenge;

public class Sum3And5Challenge {
    public static void main(String[] args) {

        int sum = 0;
        int count = 0;
        for (int numbers = 1; numbers <= 1000; numbers++) {
            if (count == 5) break;
            else if (numbers % 3 == 0 && numbers % 5 == 0) {
                sum += numbers;
                System.out.println(numbers);
                count++;
            }
        }
        System.out.println("Sum = " + sum);
    }
}
