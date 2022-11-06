package Day2.Date;

import java.time.LocalTime;
import java.time.ZoneId;
import java.util.Set;

public class Main01 {
    public static void main(String[] args) {
        Set<String> zones = ZoneId.getAvailableZoneIds();
        zones.stream()
                .filter(x-> x.contains("Europe"))
                .forEach(x -> System.out.println(LocalTime.now(ZoneId.of(x))));
    }

}
