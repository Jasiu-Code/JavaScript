package Day1;

public class AppConfig {
    private static AppConfig INSTANCE;
    private String jakiesDane;
    private int jakasLiczba;

    private AppConfig(String dane, int liczba) {
        this.jakiesDane = dane;
        this.jakasLiczba = liczba;
    }

    public static synchronized AppConfig getInstance(String dane, int liczba){
        if (INSTANCE == null){
            INSTANCE = new AppConfig(dane,liczba);
        }
        return INSTANCE;
    }

}
