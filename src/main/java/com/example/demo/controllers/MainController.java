package com.example.demo.controllers;

import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class MainController {
    private final UserRepository Users;

    @Autowired
    public MainController(UserRepository repo){
        this.Users = repo;
    }
}
