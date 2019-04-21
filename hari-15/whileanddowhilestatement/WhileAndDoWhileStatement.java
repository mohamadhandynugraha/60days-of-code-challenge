package hari15.whileanddowhilestatement;

public class WhileAndDoWhileStatement {
    public static void main(String[] args) {
        // while version
        int number = 0;
        while (number <= 100){
            if (isEvenNumber(number)) System.out.println(number);
            number++;
        }

        System.out.println("**********************************************************");
        // do while version
        number = 0;
        do {
            if (isEvenNumber(number)) System.out.println(number);
            number ++;
        } while (number <= 100);

        System.out.println("**********************************************************");

        int num = 4;
        int finishNum = 20;
        int count = 0;
        int totalNum = 0;
        while (num <= finishNum){
            num ++;
            if (isEvenNumber(num)){
                System.out.println("Even number = " + num);
                totalNum += num;
                count ++;
                if (count == 5){
                    break;
                }
            } else continue;
        }
        System.out.println("Total num = " + totalNum);
    }

    private static boolean isEvenNumber(int number){
        return number % 2 == 0;
    }
}
