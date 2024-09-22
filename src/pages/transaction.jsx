import React, { useState } from "react";
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
} from "@mui/material";
import { styled } from "@mui/material/styles";

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

function createData(id, amount, fee, status, date) {
  return { id, amount, fee, status, date };
}

// Dummy data for the new fields
const rows = [
  createData("TXN001", "100.00", "2.50", "Completed", "2024-09-17T11:55:19Z"),
  createData("TXN002", "250.00", "5.00", "Pending", "2024-09-18T12:34:19Z"),
  createData("TXN003", "50.00", "1.00", "Failed", "2024-09-19T10:20:30Z"),
  createData("TXN004", "450.00", "10.00", "Completed", "2024-09-20T14:45:50Z"),
  createData("TXN005", "125.00", "3.00", "Pending", "2024-09-21T09:05:25Z"),
  createData("TXN006", "75.00", "1.50", "Completed", "2024-09-22T11:22:30Z"),
];

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
  { id: "amount", label: "Amount" },
  { id: "fee", label: "Fee" },
  { id: "status", label: "Status" },
  { id: "date", label: "Date" },
];

export default function EnhancedTransactionsTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <ThemeProvider theme={darkTheme}>
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
          Transactions
        </Typography>
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
              {stableSort(rows, getComparator(order, orderBy)).map((row) => (
                <TableRow key={row.id} hover>
                  <StyledTableCell>{row.id}</StyledTableCell>
                  <StyledTableCell>{row.amount}</StyledTableCell>
                  <StyledTableCell>{row.fee}</StyledTableCell>
                  <StyledTableCell>{row.status}</StyledTableCell>
                  <StyledTableCell>
                    {new Date(row.date).toLocaleString()}
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
