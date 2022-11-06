package Day2.InterfejsyFunkcyjne;

public class IntegerTransform implements Transform<Integer, Integer>{
    @Override
    public Integer transform(Integer s) {
        return s-1;
    }
}
