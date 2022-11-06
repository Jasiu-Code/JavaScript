package Day2.Date;

import java.time.LocalTime;
import java.util.Map;
import java.util.Set;

public class Main03 {
    public static void main(String[] args) {
        Map<String, LocalTime> mt = MapTime.getMapTime();
        Set<String> keys =  mt.keySet();
        for(String key:keys){
            System.out.println(key);
            System.out.println(mt.get(key));
        }

    }
}
