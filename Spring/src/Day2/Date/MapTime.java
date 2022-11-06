package Day2.Date;

import java.time.LocalTime;
import java.time.ZoneId;
import java.util.Map;
import java.util.stream.Collectors;

public class MapTime {
    public static Map<String, LocalTime> getMapTime(){
         Map<String, LocalTime> zonesMap = ZoneId.getAvailableZoneIds().stream()
                .collect(Collectors.toMap(s -> s,s->LocalTime.now(ZoneId.of(s))));
         return  zonesMap;
    }
}
