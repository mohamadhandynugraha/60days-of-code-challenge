package hari15.switchstatementchallenge;

import java.util.Scanner;

public class SwitchStatementChallenge {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String newValue = scanner.nextLine();
        char testValue = newValue.charAt(3);
        switch (testValue) {
            case 'A': case 'a':
                System.out.println("A was found");
                break;
            case 'B': case 'b':
                System.out.println("B was found");
                break;
            case 'C': case 'c':
                System.out.println("C was found");
                break;
            case 'D': case 'd':
                System.out.println("D was found");
                break;
            case 'E':
                System.out.println("E was found");
                break;
            default:
                System.out.println("Nothing A, B, C, D or E");
                break;
        }
    }
}