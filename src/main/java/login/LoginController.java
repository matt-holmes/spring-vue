package login;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class LoginController {
    @RequestMapping("/login")
    public Boolean login() {
        return true;
    }
}
