package com.rahaf.assignment_management.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import lombok.RequiredArgsConstructor;
import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;

    @Override
    protected void doFilterInternal( HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException
    {
        String authHeader = request.getHeader("Authorization");
        if(authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }
        String token = authHeader.substring(7);
        boolean valid = jwtService.isTokenValid(token);
        System.out.println("VALID = " + valid);
        if(!valid){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }
        System.out.println("TOKEN = " + token);
        filterChain.doFilter(request, response);
    }
}