package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
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

    @GetMapping("/add")
    private String getForm() {
        return "/add.jsp";
    }

    @PostMapping("/add")
    private String getForm2(HttpServletRequest req, Model model) {
        int quantity = Integer.parseInt(req.getParameter("quantity"));
        Long id = Long.parseLong(req.getParameter("id"));
        model.addAttribute("id", id);
        model.addAttribute("quantity", quantity);
        return ("redirect:/addtocart/{id}/{quantity}");
    }

    @GetMapping("/addtocart/{id}/{quantity}")
    public String addtocart(@PathVariable Long id, @PathVariable int quantity, Model model) {
        List<Product> list = produktDao.getList();
        List<CartItem> listCart = cart.getCartItems();
        for (Product p : list) {
            if (p.getId() == id) {
                model.addAttribute("Product", p.getName());
                model.addAttribute("Price", p.getPrice());
                model.addAttribute("Quantity", quantity);
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
        return "/addtocart.jsp";
    }

    @RequestMapping("/cart")
    public String cart(Model model) {
        List<CartItem> items = cart.getCartItems();

        int quantity = 0;
        int sum = 0;
        for (CartItem item : items) {
            quantity += item.getQuantity();
            sum += item.getQuantity() * item.getProduct().getPrice();
        }
        model.addAttribute("cartItems", items.size());
        model.addAttribute("products", quantity);
        model.addAttribute("sum", sum);

        return "/cart.jsp";
    }


    @RequestMapping("/sub/{id}")
    public String sub(@PathVariable Long id) {
        List<CartItem> list = cart.getCartItems();
        for (CartItem i : list) {
            if (i.getProduct().getId() == id) {
                if (i.getQuantity() > 1) {
                    i.setQuantity(i.getQuantity() - 1);
                }
            }
        }
        return "redirect:/cart";
    }

    @RequestMapping("/add/{id}")
    public String add(@PathVariable Long id) {
        List<CartItem> list = cart.getCartItems();
        for (CartItem i : list) {
            if (i.getProduct().getId() == id) {
                i.setQuantity(i.getQuantity() + 1);
            }
        }
        return "redirect:/cart";
    }

    @RequestMapping("/del/{id}")
    public String del(@PathVariable Long id) {
        List<CartItem> list = cart.getCartItems();
        CartItem itemToRemove = null;
        for (CartItem i : list) {
            if (i.getProduct().getId() == id) {
                itemToRemove = i;
            }
        }
        if (itemToRemove != null) {
            cart.removeFromCart(itemToRemove);
        }
        return "redirect:/cart";
    }
}

