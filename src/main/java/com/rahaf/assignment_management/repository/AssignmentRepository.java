package com.rahaf.assignment_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.rahaf.assignment_management.model.Assignment;

public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
        boolean existsByTitle(String title);
}