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
      <Typography variant="h5">Assignments</Typography>

      {assignments.map((a) => (
        <Card
          key={a.id}
          style={{ marginTop: "15px", padding: "10px" }}
        >
          <CardContent>
            <Typography variant="h6">{a.title}</Typography>

            <Chip
              label={a.priority}
              color={getPriorityColor(a.priority)}
              style={{ marginRight: "10px" }}
            />

            <Chip
              label={a.status}
              color={getStatusColor(a.status)}
            />

            <div style={{ marginTop: "10px" }}>
              <Button
                variant="outlined"
                onClick={() => onEdit(a)}
                style={{ marginRight: "10px" }}
              >
                Edit
              </Button>

              <Button
                variant="contained"
                color="error"
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