package Day1;

public class Rectangle extends Shape {
    private double a;
    private double b;
    public Rectangle(double a, double b) {
        this.a = a;
        this.b = b;
    }
    @Override
    public double calculateArea() {
        this.setArea(a * b);
        return a * b;
    }
    @Override
    public double calculateCircuit() {
        this.setCircuit(2 * a + 2 * b);
        return 2 * a + 2 * b;
    }

    @Override
    public String toString() {
        return "Prostokąt o bokach "+this.a+" i "+this.b+" - pole = "+this.calculateArea()+", obwód = "+this.calculateCircuit();
    }
}
