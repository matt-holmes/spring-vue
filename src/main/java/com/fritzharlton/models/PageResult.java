package com.fritzharlton.models;

import java.util.UUID;

public class PageResult {

    private String id;
    private String msg;

    public PageResult() {
        this.id = UUID.randomUUID().toString();
    }

    public String getId() {
        return id;
    }

    public String getMsg() {
        return msg;
    }

}
