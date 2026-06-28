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
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./components/Login";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AddIcon from "@mui/icons-material/Add";

function App() {

  const [assignments, setAssignments] = useState([]);
  const [editingAssignment, setEditingAssignment] = useState(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [openDialog, setOpenDialog] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState( !!localStorage.getItem("jwtToken") );
  const theme = createTheme({ palette: {
        mode: darkMode ? "dark" : "light" }
    });

  const handleEdit = (assignment) => {
    setEditingAssignment(assignment);
    setOpenForm(true);
  };

  const loadData = () => {
    getAssignments()
      .then(res => {
        console.log("TYPE =", typeof res.data);
        console.log("ARRAY =", Array.isArray(res.data));
        console.log(res.data);
        setAssignments(res.data);
      })
      .catch(err => console.error(err));
  };

  const logout = () => {
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("role");
      setLoggedIn(false);
      setAssignments([]);
  };

  useEffect(() => {
      if (loggedIn) {
          loadData();
      }
  }, [loggedIn]);

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
      await updateAssignmentStatus( assignmentId,newStatus );
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

  if (!loggedIn) {
        return ( <Login onLogin={() => { setLoggedIn(true); }} /> );
    }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" elevation={0} sx={{
              bgcolor: "white",
              color: "#111827",
              borderBottom: "1px solid #E5E7EB" }} >
          <Toolbar sx={{ py: 1 }}>
              <Box sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      flexGrow: 1 }}>
                  <AssignmentOutlinedIcon sx={{ color: "#2563EB", fontSize: 38 }}/>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      Assignment Manager
                  </Typography>
              </Box>

              <Typography sx={{
                      mr: 3,
                      fontSize: 18 }}>
                  Welcome,
                  <span style={{
                          color: "#2563EB",
                          fontWeight: 700,
                          marginLeft: 5 }}>
                      admin
                  </span>
              </Typography>

              <Button variant="outlined" color="error" startIcon={<LogoutOutlinedIcon />}
                  onClick={logout}
                  sx={{
                      borderRadius: "12px",
                      textTransform: "none",
                      fontWeight: 600 }}>
                  Logout
              </Button>
              <IconButton
                  onClick={() => setSettingsOpen(true)}
                  sx={{
                      ml: 2,
                      color: "#6B7280",
                      "&:hover": {
                          backgroundColor: "#F3F4F6"
                      }
                  }} >
                  <SettingsIcon />
              </IconButton>
          </Toolbar>
      </AppBar>

     <Container maxWidth={false} sx={{ px: 80 }}>
      <Box mt={4} mb={3}>
      <Box
        sx={{
          display:"flex",
          gap:2,
          alignItems:"center",
          justifyContent:"space-between",
          mb:4,
          p:2,
          bgcolor:"background.paper",
          borderRadius:"16px",
          boxShadow:2
        }}
      >
      <TextField
        label="Search assignments..."
        variant="outlined"
        size="small"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          flex:1,
          "& .MuiOutlinedInput-root": {
            bgcolor:"background.default"
          }
        }}
      />

      <Select
        value={filterStatus}
        size="small"
        onChange={(e) => setFilterStatus(e.target.value)}
        sx={{
          minWidth:180,
          bgcolor:"background.default"
        }}
      >
          <MenuItem value="ALL"> All Status </MenuItem>
          <MenuItem value="TODO"> TODO </MenuItem>
          <MenuItem value="IN_PROGRESS"> IN PROGRESS </MenuItem>
          <MenuItem value="COMPLETED"> COMPLETED </MenuItem>
      </Select>
      </Box>

      <Dashboard assignments={assignments} />

      <Box sx={{ mb: 3 }}>
          <Button variant="contained" startIcon={<AddIcon />} onClick={() => setOpenForm(true)}
              sx={{
                  backgroundColor: "#2563EB",
                  borderRadius: "12px",
                  px: 3,
                  py: 1.5,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "16px",
                  boxShadow: 2,
                  "&:hover": {
                      backgroundColor: "#1D4ED8"
                  }
              }}
          >
              Add Assignment
          </Button>
      </Box>

      <Dialog open={openForm} onClose={() => { setOpenForm(false); setEditingAssignment(null); }}
          fullWidth
          maxWidth="sm">
          <AssignmentForm refresh={loadData}
              editingAssignment={editingAssignment}
              clearEdit={() => {
                  setEditingAssignment(null);
                  setOpenForm(false);
              }}
          />
      </Dialog>

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
        <Box sx={{ width: 320, p: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
            Settings
          </Typography>

          <FormControlLabel control={<Switch checked={darkMode}
          onChange={() => setDarkMode(!darkMode) }/>} label="Dark Mode" sx={{ fontWeight: 600 }}/>
        </Box>
      </Drawer>
      <ToastContainer />
    </Container>
    </ThemeProvider>
    );
}

export default App;