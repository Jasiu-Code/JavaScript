package Day1;

public class Circle extends Shape {
    private double r;

    public Circle(double r) {
        this.r = r;
    }
    @Override
    public double calculateArea() {
        this.setArea(3.14*r*r);
        return 2*3.14*r*r;
    }
    @Override
    public double calculateCircuit() {
        this.setArea(2*3.14*r);
        return 2*3.14*r;
    }

    @Override
    public String toString() {
        return "Koło o promieniu "+this.r+" - pole = "+this.calculateArea()+", obwód = "+this.calculateCircuit();
    }
}
