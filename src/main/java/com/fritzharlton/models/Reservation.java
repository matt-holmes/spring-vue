package com.fritzharlton.models;

import java.util.UUID;

public class Reservation extends AbstractModel{

    private String id;
    private String first_name;
    private String last_name;
    private String email;
    private String check_in;
    private String check_out;
    private String special_needs;
    private String phone;
    private String user_id;

    public Reservation() {
        this.id = UUID.randomUUID().toString();
    }

    public String getId() {
        return id;
    }

    public String getFirstName() {
        return first_name;
    }

    public String getLastName() {
        return last_name;
    }

    public String getEmail() {
        return email;
    }

    public String getCheckin() {
        return check_in;
    }

    public String getCheckout() {
        return check_out;
    }

    public String getSpecialNeeds() {
        return special_needs;
    }

    public String getPhone() {
        return phone;
    }

    public String getUserId() {
        return user_id;
    }


}
