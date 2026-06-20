import axios from "axios";
const API_URL = "http://localhost:8080/api/assignments";
const AUTH_URL = "http://localhost:8080/api/auth";

export const login = (credentials) => axios.post(`${AUTH_URL}/login`, credentials);

const api = axios.create({ baseURL: "http://localhost:8080/api" });
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// GET ALL
export const getAssignments = () => api.get("/assignments");

// CREATE
export const createAssignment = (data) => api.post("/assignments", data);

// DELETE
export const deleteAssignment = (id) => api.delete(`/assignments/${id}`);

// UPDATE FULL ASSIGNMENT
export const updateAssignment = (id, data) => api.put(`/assignments/${id}`, data);

// UPDATE STATUS ONLY
export const updateAssignmentStatus = (id, status) => api.put(`/assignments/${id}`, { status });
