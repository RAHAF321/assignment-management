import React from "react";
import { Card, CardContent, Typography} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

function Dashboard({assignments}){
  const total = assignments.length;
  const todo = assignments.filter(a => a.status === "TODO").length;
  const inProgress = assignments.filter(a => a.status === "IN_PROGRESS").length;
  const completed = assignments.filter(a => a.status === "COMPLETED").length;

  return (
      <div style={{ display: "flex", gap: "20px", padding: "10px 0 20px 0" }}>
        <StatCard title="Total" value={total} color="#2563EB" icon={<AssignmentIcon />} />
        <StatCard title="TODO" value={todo} color="#9CA3AF" icon={<PendingActionsIcon />} />
        <StatCard title="IN PROGRESS" value={inProgress} color="#2563EB" icon={<AutorenewIcon />} />
        <StatCard title="COMPLETED" value={completed} color="#16A34A" icon={<TaskAltIcon />} />
      </div>
    );
 }

 function StatCard({ title, value, color, icon }) {
     return (
         <Card sx={{
                 flex: 1,
                 borderRadius: 4,
                 boxShadow: 2,
                 border: "1px solid #E5E7EB" }}>
             <CardContent>
                 <Box display="flex" alignItems="center" gap={2} >
                     <Avatar
                         sx={{
                             bgcolor: color,
                             width: 60,
                             height: 60
                         }} >
                         {icon}
                     </Avatar>
                     <Box>
                         <Typography
                             sx={{
                                 color: "#6B7280",
                                 fontWeight: 600
                             }} >
                             {title}
                         </Typography>
                         <Typography variant="h4"
                             sx={{
                                 color,
                                 fontWeight: 700
                             }} >
                             {value}
                         </Typography>
                     </Box>
                 </Box>
             </CardContent>
         </Card>
     );
 }

 export default Dashboard;
