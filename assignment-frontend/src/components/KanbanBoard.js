import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

function KanbanBoard({ assignments, onEdit, onDelete, onDragEnd}) {
  const todo = assignments.filter(a => a.status === "TODO");
  const inProgress = assignments.filter(a => a.status === "IN_PROGRESS");
  const completed = assignments.filter(a => a.status === "COMPLETED");

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"20px", marginTop:"20px" }}>
      <Column title="TODO" items={todo} onEdit={onEdit} onDelete={onDelete}/>
      <Column title="IN_PROGRESS" items={inProgress} onEdit={onEdit} onDelete={onDelete}/>
      <Column title="COMPLETED" items={completed} onEdit={onEdit} onDelete={onDelete}/>
    </div>
      </DragDropContext>
    );
    }

function Column({ title, items, onEdit, onDelete }) {

  return (
    <Droppable droppableId={title}>
      {(provided) => ( <div ref={provided.innerRef} {...provided.droppableProps}
          style={{ background:"#f4f4f4", padding:"10px", borderRadius:"10px", minHeight:"300px" }} >
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>

      {items.map((item, index) => (

        <Draggable key={item.id} draggableId={String(item.id)} index={index} >
          {(provided) => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >

              <Card
                sx={{ mb: 2, borderRadius: "14px", boxShadow: 3, transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)"
                  }
                }} >

                <CardContent>

                  <Typography variant="h6" style={{ fontWeight: "bold" }} >
                    {item.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary"
                    style={{ marginTop: "8px", minHeight: "40px" }} >
                    {item.description || "No description"}
                  </Typography>

                  <Typography style={{ marginTop: "10px", fontWeight: "bold",
                      color: item.priority === "HIGH" ? "red" : item.priority === "MEDIUM" ? "orange" : "green" }} >
                    {item.priority}
                  </Typography>

                  <Box mt={1} sx={{ display: "flex", flexDirection: "column", gap: "4px" }} >

                    <Typography variant="caption" color="text.secondary" >
                      Created:{" "}
                      {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "-" }
                    </Typography>

                    <Typography variant="caption" color="text.secondary" >
                      Updated:{" "}
                      {
                      item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : "-"
                      }
                    </Typography>
                  </Box>
                  <div style={{ marginTop: "15px" }}>
                    <Button size="small" onClick={() => onEdit(item)} style={{ marginRight: "5px" }}>
                      Edit
                    </Button>

                    <Button size="small" color="error" onClick={() => onDelete(item)} >
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </Draggable>
      ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
    );
    }
export default KanbanBoard;