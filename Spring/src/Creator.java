public class Creator {
    public Product createProduct(String type){
        Product p = null;
        if("VirtualProduct".equals(type)){
            p = new VirtualProduct();
        } else if ("AdvancedProduct".equals(type)) {
            p =new AdvancedProduct();
        }else if ("SimpleProduct".equals(type)) {
            p =new SimpleProduct();
        }
        return p;
    };
}
