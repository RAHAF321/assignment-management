package com.rahaf.assignment_management.controller;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import com.rahaf.assignment_management.service.AssignmentService;

import com.rahaf.assignment_management.model.Assignment;
import com.rahaf.assignment_management.service.AssignmentService;
import org.springframework.web.bind.annotation.CrossOrigin;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/assignments")
@RequiredArgsConstructor
public class AssignmentController {

    private final AssignmentService assignmentService;

    @PostMapping
    public Assignment create(@RequestBody Assignment assignment) {
        return assignmentService.createAssignment(assignment);
    }

    @GetMapping
    public List<Assignment> getAll() {
        return assignmentService.getAllAssignments();
    }

    @GetMapping("/{id}")
    public Assignment getById(@PathVariable Long id){
        if(assignmentService.getAssignmentById(id) == null){
            throw new RuntimeException("Assignment not found with id: " + id);
        }
        return assignmentService.getAssignmentById(id);
    }

    @PutMapping("/{id}")
    public Assignment update(@PathVariable Long id, @RequestBody Assignment assignment){
        return assignmentService.updateAssignment(id, assignment);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        assignmentService.deleteAssignment(id);
    }
  }
