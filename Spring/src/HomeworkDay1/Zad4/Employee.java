package HomeworkDay1.Zad4;

public class Employee extends User implements Payable{
    @Override
    public void pay() {
        System.out.println("Paid");
    }
}
