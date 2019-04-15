package hari14.teennumberchecker;

public class TeenNumberChecker {
    public static boolean hasTeen(int a, int b, int c){
        return (a <= 19 && a >= 13) || (b <= 19 && b >= 13) || (c <= 19 && c >= 13);
    }

    public static boolean isTeen(int age){
        return (age <= 19 && age >= 13);
    }
    public static void main(String[] args) {
        boolean result = hasTeen(9, 99, 19);
        System.out.println(result);
        result = hasTeen(23, 15, 42);
        System.out.println(result);
        result = hasTeen(22, 23, 34);
        System.out.println(result);

        result = isTeen(9);
        System.out.println(result);
        result = isTeen(13);
        System.out.println(result);
    }
}
