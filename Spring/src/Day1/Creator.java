package Day1;

public class Creator {
    public Product createProduct(String type){
        Product p = null;
        if("Day1.VirtualProduct".equals(type)){
            p = new VirtualProduct();
        } else if ("Day1.AdvancedProduct".equals(type)) {
            p =new AdvancedProduct();
        }else if ("Day1.SimpleProduct".equals(type)) {
            p =new SimpleProduct();
        }
        return p;
    };
}
