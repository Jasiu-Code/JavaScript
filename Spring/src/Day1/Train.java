package Day1;

public class Train extends Vehicle{
    private int trackWidth;
    public Train(Integer maxSpeed, String model, int trackWidth){
        super(maxSpeed,model);
        this.trackWidth = trackWidth;

    }


    public int getTrackWidth() {
        return trackWidth;
    }

    public void setTrackWidth(int trackWidth) {
        this.trackWidth = trackWidth;
    }
    @Override
    public String getSound() {
        return "szzzzzzzz";
    }
}
