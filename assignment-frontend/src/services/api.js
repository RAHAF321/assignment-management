import axios from "axios";
const API_URL = "http://localhost:8080/assignments";

// GET ALL
export const getAssignments = () => axios.get(API_URL);

// CREATE
export const createAssignment = (data) => axios.post(API_URL, data);

// DELETE
export const deleteAssignment = (id) => axios.delete(`${API_URL}/${id}`);

// UPDATE FULL ASSIGNMENT
export const updateAssignment = (id, data) => axios.put(`${API_URL}/${id}`, data);

// UPDATE STATUS ONLY
export const updateAssignmentStatus = (id, status) => axios.put(`${API_URL}/${id}`, { status });
