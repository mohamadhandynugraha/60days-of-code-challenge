package hari15.sumdigit;

public class DigitSum {
    public static void main(String[] args) {
        System.out.println(sumDigits(-1));
        System.out.println(sumDigits(-2));
        System.out.println(sumDigits(0));
        System.out.println(sumDigits(9));
        System.out.println(sumDigits(19));
        System.out.println(sumDigits(125));
        System.out.println(sumDigits(1125));
    }

    private static int sumDigits(int number){
        if (number < 10){
            return -1;
        }
        int sum = 0;
        while (number > 0){
            int digit = number % 10;
            sum += digit;
            number /= 10;
        }
        return sum;
    }
}
