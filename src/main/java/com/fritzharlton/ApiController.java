package com.fritzharlton;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.fritzharlton.models.PageResult;


@RestController
public class ApiController {

    @RequestMapping("/pageResult")
    public PageResult pageResult() {
        return new PageResult();
    }
}
