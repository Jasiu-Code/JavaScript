package Day1;

public class FacebookObserver implements Observer {
    @Override
    public void update(String title) {
        System.out.println("Facebook Day1.Observer");
    }
}
