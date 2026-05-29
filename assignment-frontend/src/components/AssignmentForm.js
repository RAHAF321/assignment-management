import React, { useEffect, useState } from "react";
import { TextField, Button, MenuItem, Card, CardContent, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { createAssignment, updateAssignment } from "../services/api";

function AssignmentForm({ refresh, editingAssignment, clearEdit }) {
  const [form, setForm] = useState({
    title: "",
    description:"",
    priority: "LOW",
    status: "TODO",
    dueDate: ""
  });

  const [error, setError] = useState("");

 useEffect(() => {
     if(editingAssignment){
         setForm({
             title: editingAssignment.title || "",
             description: editingAssignment.description || "",
             priority: editingAssignment.priority || "LOW",
             status: editingAssignment.status || "TODO",
             dueDate: editingAssignment.dueDate || ""
         });
     }else{
     setForm({
           title: "",
           description: "",
           priority: "LOW",
           status: "TODO",
           dueDate: ""
         });
     }
 }, [editingAssignment]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingAssignment) {
        await updateAssignment(editingAssignment.id, form);
        toast.success("Assignment updated");
        clearEdit();
      } else {
        await createAssignment(form);
        toast.success("Assignment created");
      }

      setForm({ title: "", description:"", priority: "LOW", status: "TODO", dueDate: ""});
      setError("");
      refresh();
    } catch (err) {
      toast.error(err.response?.data?.message || "Error");
      setError(err.response?.data?.message || "Error");
    }
  };

  return (
    <Card style={{ maxWidth: 500, margin: "20px auto", border: editingAssignment ? "2px solid orange" : "none"}}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {editingAssignment ? `✏️ Editing: ${editingAssignment.title}` : "➕ Add Assignment"}
        </Typography>

        {error && ( <Typography color="error">{error}</Typography> )}

        <form onSubmit={handleSubmit}>
          <TextField label="Title" fullWidth margin="normal"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value }) } />

          <TextField label="Description" fullWidth multiline rows={4} margin="normal"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value }) } />

          <TextField label="Due Date" type="date" fullWidth margin="normal" variant="outlined"
            value={form.dueDate}
            slotProps={{ inputLabel: { shrink: true } }}
            onChange={(e) => setForm({ ...form, dueDate: e.target.value }) } />

          <TextField select label="Priority" fullWidth margin="normal"
            value={form.priority}
            onChange={(e) => setForm({ ...form, priority: e.target.value }) } >
            <MenuItem value="LOW">LOW</MenuItem>
            <MenuItem value="MEDIUM">MEDIUM</MenuItem>
            <MenuItem value="HIGH">HIGH</MenuItem>
          </TextField>

          <TextField select label="Status" fullWidth margin="normal"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value }) } >
            <MenuItem value="TODO">TODO</MenuItem>
            <MenuItem value="IN_PROGRESS">IN_PROGRESS</MenuItem>
            <MenuItem value="COMPLETED">COMPLETED</MenuItem>
          </TextField>

          {editingAssignment && (
            <Button variant="outlined" color="secondary" fullWidth style={{ marginTop: "10px" }} onClick={clearEdit}>
              Cancel Edit
            </Button>
          )}

          <Button variant="contained" color="primary" fullWidth style={{ marginTop: "10px" }} type="submit" >
            {editingAssignment ? "Update" : "Add"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default AssignmentForm;