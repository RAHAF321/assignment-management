import axios from "axios";

const API_URL = "http://localhost:8080/assignments";

// GET ALL
export const getAssignments = () => axios.get(API_URL);

// CREATE
export const createAssignment = (data) => axios.post(API_URL, data);

// DELETE
export const deleteAssignment = (id) => axios.delete(`${API_URL}/${id}`);

// UPDATE
export const updateAssignment = (id, data) =>  axios.put(`http://localhost:8080/assignments/${id}`, data);