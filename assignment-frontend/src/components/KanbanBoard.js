import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function KanbanBoard({ assignments }) {

  const todo = assignments.filter(a => a.status === "TODO");
  const inProgress = assignments.filter(a => a.status === "IN_PROGRESS");
  const completed = assignments.filter(a => a.status === "COMPLETED");

  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>

      <Column title="TODO" items={todo} />
      <Column title="IN_PROGRESS" items={inProgress} />
      <Column title="COMPLETED" items={completed} />

    </div>
  );
}

function Column({ title, items }) {
  return (
    <div
      style={{
        flex: 1,
        background: "#f4f4f4",
        padding: "10px",
        borderRadius: "10px",
        minHeight: "300px"
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>

      {items.map(item => (
        <Card key={item.id} style={{ marginBottom: "10px" }}>
          <CardContent>
            <Typography>{item.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default KanbanBoard;