import { useEffect, useState } from "react";
import { getAssignments, deleteAssignment, updateAssignmentStatus } from "./services/api";
import AssignmentForm from "./components/AssignmentForm";
import Dashboard from "./components/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button} from "@mui/material";
import { Container, TextField, Select, MenuItem, Box } from "@mui/material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import KanbanBoard from "./components/KanbanBoard";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

function App() {

  const [assignments, setAssignments] = useState([]);
  const [editingAssignment, setEditingAssignment] = useState(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleEdit = (assignment) => {
    setEditingAssignment(assignment);
    window.scrollTo({top: 0, behavior: "smooth" });
  };

  const loadData = () => {
    getAssignments().then(res => setAssignments(res.data)).catch(err => console.error(err));
  };

  useEffect(() => {    loadData();
  }, []);

  // DELETE HANDLER
  const handleDelete = (assignment) => {
    setSelectedAssignment(assignment);
    setOpenDialog(true);
  };
  const confirmDelete = async () => {
    try {
      await deleteAssignment(selectedAssignment.id);

      toast.success(`"${selectedAssignment.title}" deleted`);

      loadData();
    } catch (err) {
      toast.error("Delete failed");
    } finally {
      setOpenDialog(false);
      setSelectedAssignment(null);
    }
  };

  const handleDragEnd = async (result) => {

    if (!result.destination) return;

    const assignmentId = result.draggableId;
    const newStatus = result.destination.droppableId;

    try {

      await updateAssignmentStatus(
        assignmentId,
        newStatus
      );

      loadData();

      toast.success("Status updated");

    } catch (err) {

      toast.error("Drag update failed");

    }
  };

  // Filter Logic
  const filteredAssignments = assignments.filter((a) => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "ALL" || a.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return ( <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Assignment Manager
          </Typography>
          <IconButton color="inherit" onClick={() => setSettingsOpen(true)} >
                <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

     <Container maxWidth={false} sx={{ px: 80 }}>
      <Box mt={4} mb={3}>
      <Box sx={{ display:"flex", gap:2, alignItems:"center", justifyContent:"space-between", mb:4, p:2, background:"#fff", borderRadius:"16px", boxShadow:2 }}>
      <TextField label="Search assignments..." variant="outlined" size="small" value={search}
          onChange={(e)=>setSearch(e.target.value)}
          sx={{ flex:1 }} />

      <Select value={filterStatus} size="small" onChange={(e)=>
            setFilterStatus(e.target.value)}
          sx={{ minWidth:180 }}>
          <MenuItem value="ALL"> All Status </MenuItem>
          <MenuItem value="TODO"> TODO </MenuItem>
          <MenuItem value="IN_PROGRESS"> IN PROGRESS </MenuItem>
          <MenuItem value="COMPLETED"> COMPLETED </MenuItem>
      </Select>
      </Box>

      <Dashboard assignments={assignments} />
      <AssignmentForm refresh={loadData} editingAssignment={editingAssignment} clearEdit={() => setEditingAssignment(null)} />

      <KanbanBoard
        assignments={filteredAssignments}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onDragEnd={handleDragEnd}
      />
      </Box>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle> Confirm Delete </DialogTitle>

        <DialogContent> Are you sure you want to delete{" "}
          <b>{selectedAssignment?.title}</b>?
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}> Cancel </Button>
          <Button color="error" onClick={confirmDelete}> Delete </Button>
        </DialogActions>

      </Dialog>
      <Drawer anchor="right" open={settingsOpen} onClose={() => setSettingsOpen(false)} >
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6">
            Settings
          </Typography>

          <FormControlLabel control={<Switch />} label="Dark Mode" />
        </Box>
      </Drawer>
      <ToastContainer />
    </Container>
    </>
  );
}

export default App;