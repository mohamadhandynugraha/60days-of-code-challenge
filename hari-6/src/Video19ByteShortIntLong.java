public class Video19ByteShortIntLong {
    public static void main(String[] args) {
        int myMinValue = -2_147_483_648; // min value int
        int myMaxValue = 2_147_483_647; // max value int

        long myLong = 123183091830L;

        // challenge
        // 1. Create a byte variable and set it to any valid byte number
        // 2. Create a short variable and set it to any valid short number
        // 3. Create a int variable and set it to any valid int number
        // 4. Create a variable of type long and make it equal to
        //      50000 + 10 times sum of the byte plus short plus int

        byte myByteNumber = 125;
        short myShortNumber = 28900;
        int myIntNumber = 1819200121;
        long myLongNumber = 50000 + (10 * (myByteNumber + myShortNumber + myIntNumber));
        System.out.println(myLongNumber);
    }
}
