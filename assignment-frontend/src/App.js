import { useEffect, useState } from "react";
import { getAssignments, deleteAssignment } from "./services/api";
import AssignmentList from "./components/AssignmentList";
import AssignmentForm from "./components/AssignmentForm";
import Dashboard from "./components/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button} from "@mui/material";
import { Container, TextField, Select, MenuItem, Box } from "@mui/material";

function App() {

  const [assignments, setAssignments] = useState([]);
  const [editingAssignment, setEditingAssignment] = useState(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

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

  // Filter Logic
  const filteredAssignments = assignments.filter((a) => {
    const matchesSearch = a.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      filterStatus === "ALL" || a.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={4} mb={3}>
        <h1>Assignment Manager</h1>
      </Box>

      <Box
        display="flex"
        gap={2}
        justifyContent="center"
        alignItems="center"
        mb={3}
      >
        <TextField label="Search" variant="outlined" size="small" style={{ width: "250px" }} value={search} onChange={(e) => setSearch(e.target.value)}/>

        <Select value={filterStatus} size="small" onChange={(e) => setFilterStatus(e.target.value)}>
          <MenuItem value="ALL">All</MenuItem>
          <MenuItem value="TODO">TODO</MenuItem>
          <MenuItem value="IN_PROGRESS">IN_PROGRESS</MenuItem>
          <MenuItem value="COMPLETED">COMPLETED</MenuItem>
        </Select>
      </Box>

      <Dashboard assignments={assignments} />

      <AssignmentForm
        refresh={loadData}
        editingAssignment={editingAssignment}
        clearEdit={() => setEditingAssignment(null)}
      />

      <AssignmentList
        assignments={filteredAssignments}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>

        <DialogContent> Are you sure you want to delete{" "}
          <b>{selectedAssignment?.title}</b>?
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}> Cancel </Button>

          <Button color="error" onClick={confirmDelete}> Delete </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </Container>
  );
}

export default App;