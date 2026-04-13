import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
} from "@mui/material";

function AssignmentList({ assignments, onDelete, onEdit }) {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Assignments
      </Typography>

      {assignments.map((a) => (
        <Card
          key={a.id}
          elevation={3}
          style={{ marginBottom: "15px" }}
        >
          <CardContent style={{ padding: "16px" }}>
            <Typography variant="h6" gutterBottom>
              {a.title}
            </Typography>

            <div style={{ marginBottom: "10px" }}>
              <Chip
                label={a.priority}
                color={getPriorityColor(a.priority)}
                style={{ marginRight: "10px" }}
              />

              <Chip
                label={a.status}
                color={getStatusColor(a.status)}
              />
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <Button
                variant="outlined"
                size="small"
                onClick={() => onEdit(a)}
              >
                Edit
              </Button>

              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() => onDelete(a)}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function getPriorityColor(priority) {
  if (priority === "HIGH") return "error";
  if (priority === "MEDIUM") return "warning";
  return "success";
}

function getStatusColor(status) {
  if (status === "COMPLETED") return "success";
  if (status === "IN_PROGRESS") return "primary";
  return "default";
}

export default AssignmentList;