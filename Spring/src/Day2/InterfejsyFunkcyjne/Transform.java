package Day2.InterfejsyFunkcyjne;
@FunctionalInterface
public interface Transform<T, S> {
    T transform(S s);
}
