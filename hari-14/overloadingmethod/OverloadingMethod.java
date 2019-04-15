package hari14.overloadingmethod;

public class OverloadingMethod {


    /**
     *
     * @param feet feet to inches -> newInches= ((feet * 12) + inches).
     * @param inches inches to cm -> newInches * 2.54
     * @return cm (double)
     */
    private static double anotherCalcFeetAndInchesToCentimeters(double feet, double inches){
        if (feet >= 0 && inches >= 0 && inches <= 12) return ((feet * 12) + inches) * 2.54;
        else return -1;
    }

    public static void main(String[] args) {
        calcFeetAndInchesToCentimeters(6, 3);
        calcFeetAndInchesToCentimeters(7, 1);
        double result = calcFeetAndInchesToCentimeters(100);
        System.out.println(100 + " inches = " +result + " cm");
        result = calcFeetAndInchesToCentimeters(-10);
        System.out.println(-10 + " inches = " +result + " cm");


        System.out.println("ANOTHER &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
        result = anotherCalcFeetAndInchesToCentimeters(6, 3);
        System.out.println(6 + " feet " + 3 + " inch(es) = " + result + "  cm");
        result = anotherCalcFeetAndInchesToCentimeters(7, 1);
        System.out.println(7 + " feet " + 1 + " inc(es) = " + result + " cm");
    }

    private static double calcFeetAndInchesToCentimeters(double feet, double inches){
        double newInches;
        double centimeters = -1;
        if (feet >= 0 && inches >= 0 && inches <= 12){
            newInches = (feet * 12) + inches;
            centimeters = newInches * 2.54;
            System.out.println(feet + " ft and " + inches + " inch(es) = " + centimeters + " cm");
            return centimeters;
        }
        return centimeters;
    }

    private static double calcFeetAndInchesToCentimeters(double inches){
        // feet to inches. 1 ft = 12 inches
        if (inches >= 0) return calcFeetAndInchesToCentimeters(inches / 12, inches % 12);
        else return -1;
    }
}
