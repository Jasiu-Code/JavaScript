public class Square extends Shape {
    private double a;

    public Square(double a) {
        this.a = a;
    }
    @Override
    public double calculateArea() {
        this.setArea(a * a);
        return a * a;
    }
    @Override
    public double calculateCircuit() {
        this.setCircuit(4* a);
        return 4 * a;
    }

    @Override
    public String toString() {
        return "Kwadrat o boku "+this.a+" - pole = "+this.calculateArea()+", obwód = "+this.calculateCircuit();
    }
}
