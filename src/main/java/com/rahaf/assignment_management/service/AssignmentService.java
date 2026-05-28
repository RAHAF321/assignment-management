package com.rahaf.assignment_management.service;

import java.time.LocalDateTime;
import java.util.List;
import org.springframework.stereotype.Service;
import com.rahaf.assignment_management.repository.AssignmentRepository;
import com.rahaf.assignment_management.model.Assignment;
import lombok.RequiredArgsConstructor;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

@Service
@RequiredArgsConstructor
public class AssignmentService {

    private final AssignmentRepository assignmentRepository;

    public Assignment createAssignment(Assignment assignment) {
        String title =assignment.getTitle();
        if(title == null || title.trim().isEmpty()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Title required");
        }
        assignment.setCreatedAt(LocalDateTime.now());
        assignment.setUpdatedAt(LocalDateTime.now());

        if (assignmentRepository.existsByTitle(title)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Assignment with title '" + title + "' already exists");
        }
        return assignmentRepository.save(assignment);
    }

    public List<Assignment> getAllAssignments() {
        return assignmentRepository.findAll();
    }

    public Assignment getAssignmentById(Long id){
        return assignmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Assignment not found with id: " + id));
    }

    public Assignment updateAssignment(Long id, Assignment updatedAssignment){
        Assignment existAssignment = getAssignmentById(id);

        if(updatedAssignment.getTitle() != null) {
            existAssignment.setTitle( updatedAssignment.getTitle() );
        }
        if(updatedAssignment.getDescription()!=null) {
            existAssignment.setDescription(updatedAssignment.getDescription());
        }
        if(updatedAssignment.getPriority()!=null) {
            existAssignment.setPriority(updatedAssignment.getPriority());
        }
        if(updatedAssignment.getStatus()!=null) {
            existAssignment.setStatus(updatedAssignment.getStatus());
        }
        existAssignment.setUpdatedAt(LocalDateTime.now());
        return assignmentRepository.save(existAssignment);
    }

    public void deleteAssignment(Long id){
       if( getAssignmentById(id) != null) { // Ensure the assignment exists before deleting
        assignmentRepository.deleteById(id);
       } else {
        throw new RuntimeException("Assignment not found with id: " + id);
       }
    }

}
