package HomeworkDay2;

import java.util.Collection;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

public class Main04 {
    static <T> List<T> search(Collection<T> collection, Predicate<T> predicate){
        return collection.stream().filter(predicate).toList();
    }

    static <T, S> List<S> changeCollection(Collection<T> collection, Function<T, S> function){
        return (List<S>) function.apply((T) collection);
    }

    static <T> void consumeCollection(Collection<T> collection, Consumer<T> consumer){
        consumer.accept((T) collection);
    }

    public static void main(String[] args) {


    }
}
