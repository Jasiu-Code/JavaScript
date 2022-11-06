package Day2.Optional;

public class Main01 {
    public static void main(String[] args) {
        AddressBook ad = new AddressBook();
        System.out.println(ad.findNameByAddress("Kraków Polna 11"));
        System.out.println(ad.findAddressByName("Jan Kowalski"));

    }
}

