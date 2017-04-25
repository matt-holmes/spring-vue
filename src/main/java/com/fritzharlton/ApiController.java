package com.fritzharlton;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ModelAttribute;
import java.util.*;

import com.fritzharlton.models.PageResult;
import com.fritzharlton.models.Reservation;


@RestController
public class ApiController {

    @RequestMapping("/pageResult")
    public PageResult pageResult() {
        return new PageResult();
    }


    @RequestMapping(value = "/add-reservation", method = RequestMethod.POST)
    @ResponseBody
    public String addReservation(@RequestBody Map<String, Object> payload) {
        Reservation reservation = new Reservation();
        reservation.fill(payload);
        return "true";
    }
}
