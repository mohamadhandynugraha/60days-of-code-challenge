import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.Scanner;

public class SimpleConverterCurrency {

    public static void main(String[] args) {
        // simple program to calculate dollar to rupiah

        // scanner is used for to got input from user.
        Scanner scanner = new Scanner(System.in);
        System.out.print("Input dollar here: $");
        double dollar = scanner.nextDouble();
        // a variable is used to store the information
        // bahasa indonesia-nya sebagai wadah untuk menampung informasi
        // atau nilai
        double rp = getRupiahUpdate();
        double rupiah = dollar * rp;

        String hasil = "$" + dollar + " = Rp. " + (int) rupiah;
        System.out.println(hasil);
    }

    private static double getRupiahUpdate() {
        // using Yahoo finance API URL
        double rupiah = 0;
        StringBuilder openExchangeRateAPIData = new StringBuilder();
        try {
            // connect dulu ke URL yahoo
            URL url = new URL("https://openexchangerates.org/api/latest.json?app_id=afda6c6bceef4f5498b87db748d0344e");
            // pake coding BufferedReader, fungsinya -> untuk membaca byte stream dari URL tsb.
            // input stream reader fungsinya -> untuk mengubah byte menjadi karakter
            BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream()));
            // yang di atas masih dalam bentuk reader, kita ubah ke string dulu, untuk membaca reader readline
            for (String line = reader.readLine(); line != null; line = reader.readLine()) {
                openExchangeRateAPIData.append(line); // data += line;
            }
            JSONObject jsonObject = new JSONObject(openExchangeRateAPIData.toString());
            JSONObject rates = jsonObject.getJSONObject("rates");
            rupiah = rates.getDouble("IDR");
            reader.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return rupiah;
    }

}