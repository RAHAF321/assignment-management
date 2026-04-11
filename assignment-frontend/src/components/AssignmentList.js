import React from "react";

function AssignmentList({ assignments, onDelete, onEdit }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Assignments</h2>

      {assignments.length === 0 ? (
        <p>No assignments found</p>
      ) : (
        assignments.map((a) => (
          <div
            key={a.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "15px",
              marginBottom: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <div>
              <h3>{a.title}</h3>

              <p>
                <b>Priority:</b>{" "}
                <span style={{ color: getPriorityColor(a.priority) }}>
                  {a.priority}
                </span>
              </p>

              <p>
                <b>Status:</b>{" "}
                <span style={{ color: getStatusColor(a.status) }}>
                  {a.status}
                </span>
              </p>
            </div>

            {/* ❌ DELETE BUTTON */}
            <button
              onClick={() => onDelete(a.id)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>

            <button
              onClick={() => onEdit(a)}
              style={{
                backgroundColor: "blue",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            >
              Edit
            </button>

          </div>
        ))
      )}
    </div>
  );
}

// 🎨 Colors
function getPriorityColor(priority) {
  if (priority === "HIGH") return "red";
  if (priority === "MEDIUM") return "orange";
  return "green";
}

function getStatusColor(status) {
  if (status === "COMPLETED") return "green";
  if (status === "IN_PROGRESS") return "blue";
  return "gray";
}

export default AssignmentList;