import React, { useEffect, useState } from "react";
import { createAssignment, updateAssignment } from "../services/api";

function AssignmentForm({ refresh, editingAssignment, clearEdit }) {
  const [form, setForm] = useState({
    title: "",
    priority: "LOW",
    status: "TODO",
  });

  const [error, setError] = useState("");

  // 🧠 Populate form when editing
  useEffect(() => {
    if (editingAssignment) {
      setForm(editingAssignment);
    }
  }, [editingAssignment]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingAssignment) {
        // ✏️ UPDATE
        await updateAssignment(editingAssignment.id, form);
        clearEdit();
      } else {
        // ➕ CREATE
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
    <div style={{ padding: "20px" }}>
      <h2>{editingAssignment ? "Edit Assignment" : "Add Assignment"}</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <select
          value={form.priority}
          onChange={(e) =>
            setForm({ ...form, priority: e.target.value })
          }
        >
          <option>LOW</option>
          <option>MEDIUM</option>
          <option>HIGH</option>
        </select>

        <select
          value={form.status}
          onChange={(e) =>
            setForm({ ...form, status: e.target.value })
          }
        >
          <option>TODO</option>
          <option>IN_PROGRESS</option>
          <option>COMPLETED</option>
        </select>

        <button type="submit">
          {editingAssignment ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default AssignmentForm;