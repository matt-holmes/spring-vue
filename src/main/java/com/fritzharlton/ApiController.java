package com.fritzharlton;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.fritzharlton.models.Greeting;


@RestController
public class ApiController {
    private static final String template = "Hello World!";

    @RequestMapping("/greeting")
    public Greeting greeting() {
        return new Greeting(String.format(template));
    }
}
