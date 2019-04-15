package hari14.secondminuteschallenge;

public class SecondsAndMinutesChallenge {
    public static void main(String[] args) {
        System.out.println(getDurationString(45, 59));
        System.out.println(getDurationString(60, 59));
        System.out.println(getDurationString(70, 1));
        // long
        System.out.println("LONG ********************************************************************");
        System.out.println(getDurationString(70L, 1L));
        System.out.println(getDurationString(65L, 5L));
        System.out.println(getDurationString(65L, 20L));
        System.out.println(getDurationString(265L, 20L));
        System.out.println(getDurationString(0L, 20L));
        System.out.println(getDurationString(0L, 0L));
        System.out.println(getDurationString(0L, -10L));
        System.out.println(getDurationString(-10L, 0));
        System.out.println(getDurationString(65L, 45L));
        System.out.println("LONG ********************************************************************");
        System.out.println(getDurationString(4500L));
        System.out.println(getDurationString(3600L));
        System.out.println(getDurationString(8000L));
        System.out.println(getDurationString(11000L));
        System.out.println(getDurationString(0));
        System.out.println(getDurationString(-1));
        System.out.println(getDurationString(3945L));
    }

    private static String getDurationString(long m, long s){
        if (m >= 0 && s >= 0 && s <= 59) return m / 60 + "h " + m % 60 + "m " + s % 60 + "s";
        else return "Invalid Value";
    }

    private static String getDurationString(int minutes, int seconds){
        if(minutes >= 0 && seconds >= 0 && seconds <= 59){
            int hour = minutes / 60;
            int remainingMinutes = (minutes % 60);
            int remainingSeconds = (seconds / 60) + (seconds % 60);
            return hour + "h " + remainingMinutes + "m " + remainingSeconds+"s";
        }
        else return "Invalid Value";
    }

    private static String getDurationString(long seconds){
        if (seconds >= 0) return getDurationString(seconds / 60, seconds % 60);
        else return "Invalid Value";
    }

}
