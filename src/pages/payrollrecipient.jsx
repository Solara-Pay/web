import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Typography,
  Box,
  ThemeProvider,
  createTheme,
  Alert,
  CircularProgress,
  Button
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { createGroup, createRecipient, deleteRecipient, makeInactiveGroup } from "../actions/actions";
import { toast, ToastContainer } from "react-toastify";
import { ModalForm } from "../components/recipient";
import { useParams } from "react-router-dom";

const accessToken = localStorage.getItem('accessToken');
// console.log(accessToken);
// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1f2937",
      paper: "#374151",
    },
    text: {
      primary: "#f3f4f6",
      secondary: "#d1d5db",
    },
    primary: {
      main: "#3b82f6",
    },
  },
});

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  maxHeight: 440,
  boxShadow:
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  borderRadius: theme.shape.borderRadius,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.secondary,
}));

function createData(id, name, wallet_address, amount, schedule, status, created_at) {
  return { id, name, wallet_address, amount, schedule, status, created_at };
}



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    return order !== 0 ? order : a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "id", label: "ID" },
  { id: "name", label: "Name" },
  { id: "wallet_address", label: "Wallet Address"},
  { id: "amount", label:"Amount(SOL)"},
  {id: "schedule", label:"Schedule"},
  { id: "status", label: "Status" },
  { id: "date", label: "Created At" },
  { id: "actions", label: "Actions"}
];

export default function EnhancedTransactionsTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [transactions, setTransactions] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState('');
  const { id } = useParams();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        throw new Error("No access token found");
      }
      const response = await fetch(
        `https://script.teendev.dev/solara/api/payroll/query/group?id=${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setTransactions(result.recipients.data);
      setGroup(result.group);
      console.log(result);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Table Data
  const rows = Array.isArray(transactions)
  ? transactions.map((item) => {
    // Parse the `info` field
    // let info;
    // try {
    //   info = JSON.parse(item.info);
    // } catch (e) {
    //   info = {};  // Default to an empty object if parsing fails
    // }

    return createData(
      item.id || "N/A",                         // Default to "N/A" if 'id' is missing
      item.name || "0.00",
      item.wallet_address,
      item.amount,
      item.schedule,                 // Default to "0.00" if 'amount' is missing
      item.status || "Unknown",                 // Default to "Unknown" if 'remark' is missing
      item.created_at        // Default to "Unknown date" if 'created_at' is missing
    );
  })
  : []; // Default to an empty array if transactions is not an array




  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleDelete = async (id) => {
    try {
        setLoading(true);
      const result = await deleteRecipient(id);
      toast.success("Recipient Deleted")
      fetchData();
      setLoading(false);
    } catch (error) {
      toast.error("Error while deleting Recipient")
    }
  };

  const makeInactive = async (id) => {
    try {
      const result = await makeInactiveGroup(id);
      console.log(result);
      toast.success("Status Updated")
    } catch (error) {
      toast.error("Error while changing Payroll Group Status")
    }
  };

  const handleCreate = async (formData) => {
    try {
      const result = await createRecipient(formData, id);
      toast.success("Recipient added")
      fetchData();
    } catch (error) {
      toast.error("Error while creating Recipient")
    }
  };
  return (
    <ThemeProvider theme={darkTheme}>
        <ToastContainer/>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.default",
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "text.primary", mb: 3 }}
        >
          {group.name.toUpperCase()} Payroll Recipients
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Recipient
      </Button>
      <ModalForm open={open} handleClose={handleClose} handleSubmit={handleCreate} />
        <StyledTableContainer component={Paper}>
          <Table stickyHeader aria-label="transactions table">
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <StyledTableCell
                    key={headCell.id}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : "asc"}
                      onClick={() => handleRequestSort(headCell.id)}
                      sx={{
                        "&.MuiTableSortLabel-active": {
                          color: "primary.main",
                        },
                        "&:hover": {
                          color: "primary.light",
                        },
                      }}
                    >
                      {headCell.label}
                    </TableSortLabel>
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).map((row, index) => (
                <TableRow key={row.id} hover>
                  <StyledTableCell>{index}</StyledTableCell>
                  <StyledTableCell>{row.name.toUpperCase()}</StyledTableCell>
                  <StyledTableCell>{row.wallet_address}</StyledTableCell>
                  <StyledTableCell>{row.amount} SOL</StyledTableCell>
                  <StyledTableCell>{row.schedule.toUpperCase()}</StyledTableCell>
                  <StyledTableCell>
  {row.status === 1 ? "UNPAID" : "PAID"}
</StyledTableCell>
                  <StyledTableCell>
                    {new Date(row.created_at).toLocaleString()}
                  </StyledTableCell>
                  <StyledTableCell>
                  <Button onClick={() => handleDelete(row.id)} label="Delete Recipient" color="error">Delete</Button>
                  {/* <Button onClick={() => makeInactive(row.id)} label="Make Inactive" color="warning">Make {row.status === 1 ? "Active" : "Inactive"}</Button> */}
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </Box>
    </ThemeProvider>
  );
}
