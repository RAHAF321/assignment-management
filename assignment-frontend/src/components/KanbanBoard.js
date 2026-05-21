import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

function KanbanBoard({ assignments, onEdit, onDelete }) {

  const todo = assignments.filter(a => a.status === "TODO");
  const inProgress = assignments.filter(a => a.status === "IN_PROGRESS");
  const completed = assignments.filter(a => a.status === "COMPLETED");

  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>

      <Column title="TODO" items={todo} onEdit={onEdit} onDelete={onDelete}/>
      <Column title="IN_PROGRESS" items={inProgress} onEdit={onEdit} onDelete={onDelete}/>
      <Column title="COMPLETED" items={completed} onEdit={onEdit} onDelete={onDelete}/>

    </div>
  );
}

function Column({ title, items, onEdit, onDelete }) {
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

              <Typography
                  variant="h6"
                  style={{
                      fontWeight:"bold"
                  }}
              >
                  {item.title}
              </Typography>


              <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{
                      marginTop:"8px",
                      minHeight:"40px"
                  }}
              >
                  {item.description || "No description"}
              </Typography>


              <Typography
                  style={{
                      marginTop:"10px",
                      fontWeight:"bold",
                      color:
                          item.priority==="HIGH"
                          ? "red"
                          : item.priority==="MEDIUM"
                          ? "orange"
                          : "green"
                  }}
              >
                  {item.priority}
              </Typography>


              <Typography
                  variant="caption"
                  display="block"
                  style={{marginTop:"10px"}}
              >
                  Created:
                  {" "}
                  {item.createdAt
                      ? new Date(
                            item.createdAt
                        ).toLocaleDateString()
                      : "-"
                  }
              </Typography>


              <Typography
                  variant="caption"
                  display="block"
              >
                  Updated:
                  {" "}
                  {item.updatedAt
                      ? new Date(
                          item.updatedAt
                        ).toLocaleDateString()
                      : "-"
                  }
              </Typography>


              <div style={{ marginTop:"15px" }}>

                  <Button
                      size="small"
                      onClick={() => onEdit(item)}
                      style={{
                          marginRight:"5px"
                      }}
                  >
                      Edit
                  </Button>


                  <Button
                      size="small"
                      color="error"
                      onClick={() =>
                          onDelete(item)
                      }
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

export default KanbanBoard;