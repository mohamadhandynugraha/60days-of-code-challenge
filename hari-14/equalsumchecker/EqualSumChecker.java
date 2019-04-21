package hari14.equalsumchecker;

public class EqualSumChecker {
    public static void main(String[] args) {
        boolean result = hasEqualSum(1, 1, 1);
        System.out.println(result);
        result = hasEqualSum(1, 1, 2);
        System.out.println(result);
        result = hasEqualSum(1, -1, 0);
        System.out.println(result);
    }
    public static boolean hasEqualSum(int a, int b, int c){
        return (a + b) == c;
    }
}
