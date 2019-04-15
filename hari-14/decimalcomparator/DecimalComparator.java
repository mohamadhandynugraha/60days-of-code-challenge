package hari14.decimalcomparator;

public class DecimalComparator {
    /*
    Write a method areEqualByThreeDecimalPlaces with two parameters of type double.

The method should return boolean and it needs to return true if two double numbers are the same up to three decimal places.
 Otherwise, return false.


EXAMPLES OF INPUT/OUTPUT:

* areEqualByThreeDecimalPlaces(-3.1756, -3.175); → should return true since numbers are equal up to 3 decimal places.

* areEqualByThreeDecimalPlaces(3.175, 3.176); → should return false since numbers are not equal up to 3 decimal places

* areEqualByThreeDecimalPlaces(3.0, 3.0); → should return true since numbers are equal up to 3 decimal places.

* areEqualByThreeDecimalPlaces(-3.123, 3.123); → should return false since numbers are not equal up to 3 decimal places.


TIP: Use paper and pencil.

TIP: Use casting.

NOTE: The areEqualByThreeDecimalPlaces method  needs to be defined as public static like we have been doing so far in the course.
NOTE: Do not add a  main method to solution code.
     */
    public static void main(String[] args) {
        boolean result = areEqualByThreeDecimalPlaces(-3.1756, -3.1757);
        System.out.println(result);
        result = areEqualByThreeDecimalPlaces(3.175, 3.176);
        System.out.println(result);
        result = areEqualByThreeDecimalPlaces(3.0, 3.0);
        System.out.println(result);
        result = areEqualByThreeDecimalPlaces(-3.123, 3.123);
        System.out.println(result);

        System.out.println();

        result = areEqualByTwoDecimalPlaces(-3.1756, -3.1757);
        System.out.println(result);
        result = areEqualByTwoDecimalPlaces(3.175, 3.176);
        System.out.println(result);
        result = areEqualByTwoDecimalPlaces(3.0, 3.0);
        System.out.println(result);
        result = areEqualByTwoDecimalPlaces(-3.123, 3.123);
        System.out.println(result);

        System.out.println();
        result = areEqualByFourDecimalPlaces(-3.17571, -3.17570);
        System.out.println(result);
        result = areEqualByFourDecimalPlaces(3.175, 3.176);
        System.out.println(result);
        result = areEqualByFourDecimalPlaces(3.0, 3.0);
        System.out.println(result);
        result = areEqualByFourDecimalPlaces(-3.123, 3.123);
        System.out.println(result);

    }

    private static boolean areEqualByThreeDecimalPlaces(double a, double b){
        System.out.println((int)(a*1000));
        System.out.println((int)(b*1000));
        return (int)(a*1000) == (int)(b*1000);
    }

    private static boolean areEqualByTwoDecimalPlaces(double a, double b){
        return (int)(a*100) == (int)(b*100);
    }

    private static boolean areEqualByFourDecimalPlaces(double a, double b){
        return (int)(a*10000) == (int)(b*10000);
    }

}
