import { useEffect, useState } from "react";
import { getAssignments, deleteAssignment } from "./services/api";
import AssignmentList from "./components/AssignmentList";
import AssignmentForm from "./components/AssignmentForm";

function App() {

  const [assignments, setAssignments] = useState([]);
  const [editingAssignment, setEditingAssignment] = useState(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");

  const handleEdit = (assignment) => {
    setEditingAssignment(assignment);
  };

  const loadData = () => {
    getAssignments()
      .then(res => setAssignments(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  // DELETE HANDLER
  const handleDelete = async (id) => {
    try {
      await deleteAssignment(id);
      loadData(); // refresh
    } catch (err) {
      console.error(err);
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
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        🚀 Assignment Manager
      </h1>

      <div style={{ padding: "20px" }}>
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="ALL">All</option>
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
      </div>

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

    </div>
  );
}

export default App;