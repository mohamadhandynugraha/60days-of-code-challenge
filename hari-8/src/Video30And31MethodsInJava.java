public class Video30And31MethodsInJava {

    /*
        Jadi method overloading itu, nama method yang sama tetapi urutan parameter nya berbeda.
        atau jumlah parameter nya berbeda.
        Bisa di lihat di bawah, urutan parameter nya berbeda.
        Method overloading akan error, meskipun tipe kembalian method nya berbeda urutan parameter nya tetap sama.
     */

    public static void main(String[] args) {
        // belajar method di Java.
        int handyScore = calculateHighScorePosition(1500);
        int nugrahaScore = calculateHighScorePosition(900);
        int mohamadScore = calculateHighScorePosition(400);
        int johnScore = calculateHighScorePosition(50);
        int sonScore = calculateHighScorePosition(500);
        int kaneScore = calculateHighScorePosition(1000);

        displayHighScorePosition("handy", handyScore);
        displayHighScorePosition("nugraha", nugrahaScore);
        displayHighScorePosition("mohamad", mohamadScore);
        displayHighScorePosition("john", johnScore);
        displayHighScorePosition("son", sonScore);
        displayHighScorePosition("kane", kaneScore);

    }

    private static void calculateScore(boolean gameOver, int score, int bonus, int levelCompleted) {
        if (gameOver) {
            int finalScore = score + (levelCompleted * bonus);
            finalScore += 1000;
            System.out.println("Your final score was " + finalScore);
        }
    }

    private static int calculateScore(int score, int bonus, int levelCompleted, boolean gameOver) {
        int finalScore = 0;
        if (gameOver) {
            finalScore = score + (levelCompleted * bonus);
            finalScore += 1000;
            System.out.println("Your final score was " + finalScore);
        }
        return finalScore;
    }

    /**
     * buat method displayHighScorePosition dengan 2 parameter
     * parameter yang pertama: nama player.
     * parameter yang kedua: posisi di papan score.
     */
    private static void displayHighScorePosition(String playerName, int positionHighScoreTable) {
        String result = playerName + " managed to get into position " + positionHighScoreTable
                + " on the high score table";
        System.out.println(result);
    }

    /**
     * @param playerScore merupakan score dari player (input)
     * @return position in the high score
     */
    private static int calculateHighScorePosition(int playerScore) {
        if (playerScore >= 1000) {
            return 1;
        } else if (playerScore >= 500) {
            return 2;
        } else if (playerScore >= 100) {
            return 3;
        } else {
            return 4;
        }
    }
}