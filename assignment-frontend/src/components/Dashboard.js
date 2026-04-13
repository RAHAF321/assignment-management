import React from "react";
import { Card, CardContent, Typography} from "@mui/material";

function Dashboard({assignments}){
  const total = assignments.length;
  const todo = assignments.filter(a => a.status === "TODO").length;
  const inProgress = assignments.filter(a => a.status === "IN_PROGRESS").length;
  const completed = assignments.filter(a => a.status === "COMPLETED").length;

  return (
      <div style={{ display: "flex", gap: "20px", padding: "10px 0 20px 0" }}>
        <StatCard title="Total" value={total} color="#1976d2" />
        <StatCard title="TODO" value={todo} color="#9e9e9e" />
        <StatCard title="IN PROGRESS" value={inProgress} color="#0288d1" />
        <StatCard title="COMPLETED" value={completed} color="#2e7d32" />
      </div>
    );
 }

 function StatCard({ title, value, color }) {
   return (
     <Card style={{ flex: 1, backgroundColor: color, color: "white" }}>
       <CardContent>
         <Typography variant="h6">{title}</Typography>
         <Typography variant="h4">{value}</Typography>
       </CardContent>
     </Card>
   );
 }

 export default Dashboard;
