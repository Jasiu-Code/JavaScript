package Day2.InterfejsyFunkcyjne;
@FunctionalInterface
public interface Filter<V> {
    boolean check(V v);
}