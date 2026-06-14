package com.rahaf.assignment_management.controller;

import com.rahaf.assignment_management.dto.LoginRequest;
import com.rahaf.assignment_management.dto.LoginResponse;
import com.rahaf.assignment_management.service.JwtService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final JwtService jwtService;

    public AuthController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {

        String token = jwtService.generateToken(request.getUsername());
        return new LoginResponse(token);
    }
}