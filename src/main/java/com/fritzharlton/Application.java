package com.fritzharlton;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@SpringBootApplication
public class Application implements CommandLineRunner{

    private static final Logger log = LoggerFactory.getLogger(Application.class);

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public void run(String... strings) throws Exception {

        log.info("Creating Tables");
        jdbcTemplate.execute("DROP TABLE reservations IF EXISTS");
        jdbcTemplate.execute("CREATE TABLE reservations(id CHAR(36), " +
            "first_name VARCHAR(255), last_name VARCHAR(255), " +
            "email VARCHAR(255), check_in VARCHAR(255), " +
            "check_out VARCHAR(255), special_needs VARCHAR(255), " +
            "phone VARCHAR(255), user_id VARCHAR(255))"
        );
    }

}
