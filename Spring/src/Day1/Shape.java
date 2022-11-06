package Day1;

public abstract class Shape {
    private double area;
    private double circuit;

    public double getArea() {
        return area;
    }

    public void setArea(double area) {
        this.area = area;
    }

    public double getCircuit() {
        return circuit;
    }

    public void setCircuit(double circuit) {
        this.circuit = circuit;
    }

    public abstract double calculateArea();
    public abstract double calculateCircuit();
    public abstract String toString();

}
