package Day1;

public class TwitterObserver implements Observer{
    @Override
    public void update(String title) {
        System.out.println("Twitter Day1.Observer");
    }
}
