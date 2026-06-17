package com.rahaf.assignment_management.controller;

import com.rahaf.assignment_management.dto.LoginRequest;
import com.rahaf.assignment_management.dto.LoginResponse;
import com.rahaf.assignment_management.security.JwtService;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthController(JwtService jwtService, AuthenticationManager authenticationManager) {
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()));

        String token = jwtService.generateToken(request.getUsername());
        return new LoginResponse(token);
    }
}