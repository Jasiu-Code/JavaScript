package org.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
public class CartController {
    private final Cart cart;
    private final ProduktDao produktDao;

    @Autowired
    public CartController(Cart cart, ProduktDao produktDao) {
        this.cart = cart;
        this.produktDao = produktDao;
    }


    @GetMapping("/addtocart/{id}/{quantity}")
    @ResponseBody
    public String addtocart(@PathVariable int quantity, @PathVariable Long id) {
        List<Product> list = produktDao.getList();
        List<CartItem> listCart = cart.getCartItems();

        for (Product p : list) {
            if (p.getId() == id) {
                boolean flag = false;
                for (CartItem i : listCart) {
                    if (i.getProduct().getId() == id) {
                        i.setQuantity(i.getQuantity() + quantity);
                        flag = true;
                    }
                }
                if (flag == false) {
                    cart.addToCart(new CartItem(quantity, p));
                }
            }
        }
        return "addtocart";
    }

    @RequestMapping("/cart")
    @ResponseBody
    public String cart() {
        List<CartItem> items = cart.getCartItems();
        int length = items.size();
        int quantity =0;
        int sum = 0;
        for (CartItem item : items) {
            quantity += item.getQuantity();
            sum += item.getQuantity() * item.getProduct().getPrice();

        }

        return "W koszyku jest "+length+" pozycji." + "\nW koszyku jest " + quantity+" produktów." + "\nWatosc koszyka to: "+ sum;
    }

}
