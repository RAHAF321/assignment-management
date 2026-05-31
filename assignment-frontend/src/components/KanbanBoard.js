import React from "react";
import { Card, CardContent, Typography, Button, Box, Chip } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

function KanbanBoard({ assignments, onEdit, onDelete, onDragEnd}) {
  const todo = assignments.filter(a => a.status === "TODO")
                          .sort((a, b) => {
                                           if (!a.dueDate) return 1;
                                           if (!b.dueDate) return -1;
                                           return new Date(a.dueDate) - new Date(b.dueDate);
                                         });
  const inProgress = assignments.filter(a => a.status === "IN_PROGRESS")
                                .sort((a, b) => {
                                               if (!a.dueDate) return 1;
                                               if (!b.dueDate) return -1;
                                               return new Date(a.dueDate) - new Date(b.dueDate);
                                             });
  const completed = assignments.filter(a => a.status === "COMPLETED")
                                .sort((a, b) => {
                                               if (!a.dueDate) return 1;
                                               if (!b.dueDate) return -1;
                                               return new Date(a.dueDate) - new Date(b.dueDate);
                                             });

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
      {(provided) => (
      <Box
        ref={provided.innerRef}
        {...provided.droppableProps}
        sx={{
          bgcolor: "background.paper",
          p: 2,
          borderRadius: "10px",
          minHeight: "300px"
        }}
      >
      <Typography variant="h6" align="center" gutterBottom sx={{ color: "text.primary", fontWeight: "bold" }} >
        {title}
      </Typography>

      {items.map((item, index) => (

        <Draggable key={item.id} draggableId={String(item.id)} index={index} >
          {(provided) => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >

              <Card sx={{ mb: 2, borderRadius: "14px", boxShadow: 3, transition: "0.3s", "&:hover": { transform: "translateY(-4px)" } }} >
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

                  <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }} >
                      📅 Due: {" "}
                      {item.dueDate ? new Date(item.dueDate).toLocaleDateString() : "Not Set" }
                  </Typography>

                  {item.dueDate && (new Date(item.dueDate) < new Date()) && item.status !== "COMPLETED" && (
                    <Box mt={1}>
                      <Chip label="OVERDUE" color="error" size="small" />
                    </Box>
                  )}

                  <Box mt={1} sx={{ display: "flex", flexDirection: "column", gap: "4px" }} >

                    <Typography variant="caption" color="text.secondary" >
                      Created:{" "}
                      {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "-" }
                    </Typography>

                    <Typography variant="caption" color="text.secondary" >
                      Updated:{" "}
                      { item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : "-" }
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
        </Box>
      )}
    </Droppable>
    );
    }
export default KanbanBoard;