import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import { createAssignment, updateAssignment } from "../services/api";

function AssignmentForm({ refresh, editingAssignment, clearEdit }) {
  const [form, setForm] = useState({
    title: "",
    priority: "LOW",
    status: "TODO",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (editingAssignment) {
      setForm(editingAssignment);
    }
  }, [editingAssignment]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingAssignment) {
        await updateAssignment(editingAssignment.id, form);
        clearEdit();
      } else {
        await createAssignment(form);
      }

      setForm({ title: "", priority: "LOW", status: "TODO" });
      setError("");
      refresh();
    } catch (err) {
      setError(err.response?.data?.message || "Error");
    }
  };

  return (
    <Card style={{ maxWidth: 500, margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {editingAssignment ? "Edit Assignment" : "Add Assignment"}
        </Typography>

        {error && (
          <Typography color="error">{error}</Typography>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            fullWidth
            margin="normal"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <TextField
            select
            label="Priority"
            fullWidth
            margin="normal"
            value={form.priority}
            onChange={(e) =>
              setForm({ ...form, priority: e.target.value })
            }
          >
            <MenuItem value="LOW">LOW</MenuItem>
            <MenuItem value="MEDIUM">MEDIUM</MenuItem>
            <MenuItem value="HIGH">HIGH</MenuItem>
          </TextField>

          <TextField
            select
            label="Status"
            fullWidth
            margin="normal"
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
          >
            <MenuItem value="TODO">TODO</MenuItem>
            <MenuItem value="IN_PROGRESS">IN_PROGRESS</MenuItem>
            <MenuItem value="COMPLETED">COMPLETED</MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "10px" }}
            type="submit"
          >
            {editingAssignment ? "Update" : "Add"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default AssignmentForm;