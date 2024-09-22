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

function createData(userId, email, publicKey, balance, createdAt, updatedAt) {
  return { userId, email, publicKey, balance, createdAt, updatedAt };
}

const rows = [
  createData(
    "1",
    "user@example.com",
    "4y8sb3GkgNYFmX3V9RF8nfCPHTJS1VZu4RCHUKS9SarW",
    "17",
    "2024-09-17T11:55:19.000000Z",
    "2024-09-18T18:48:42.000000Z"
  ),
  createData(
    "2",
    "jane.doe@example.com",
    "5x9hGg2Bf3kYpM7R6Hf8fVbPQyS2Y1S9C9dHKL6TkP4L",
    "25",
    "2024-09-18T10:20:30.000000Z",
    "2024-09-19T14:12:45.000000Z"
  ),
  createData(
    "3",
    "john.smith@example.com",
    "2b7TcH7Kj4fZtD9W8Rf2tTyX3hS6N8J5K9h9N4LQmJ7K",
    "45",
    "2024-09-19T08:15:50.000000Z",
    "2024-09-20T16:30:00.000000Z"
  ),
  createData(
    "4",
    "alice.wonder@example.com",
    "1y8Fb3Kf4gQXnJ5D8Fv6vYhT8pB9G4R3C9c8V1JkT6N7",
    "32",
    "2024-09-20T12:00:00.000000Z",
    "2024-09-21T17:45:10.000000Z"
  ),
  createData(
    "5",
    "bob.brown@example.com",
    "6u9Gh3Bf2vZPzR6Q9Vf5dVcPRyF8J1M6E3a9B5PqW4R8",
    "10",
    "2024-09-21T09:05:25.000000Z",
    "2024-09-22T11:22:30.000000Z"
  ),
  createData(
    "6",
    "charlie.green@example.com",
    "3f4Yg7Dg5pGfQ8J9L3Kj6S9V1YhC8Q2D6R8B5F1J3L4P",
    "78",
    "2024-09-22T14:55:45.000000Z",
    "2024-09-23T09:11:15.000000Z"
  ),
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
  { id: "userId", label: "User ID" },
  { id: "email", label: "Email" },
  { id: "publicKey", label: "Public Key" },
  { id: "balance", label: "Balance" },
  { id: "createdAt", label: "Created At" },
  { id: "updatedAt", label: "Updated At" },
];

export default function Account() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("userId");

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
          Accounts
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
                <TableRow key={row.userId} hover>
                  <StyledTableCell>{row.userId}</StyledTableCell>
                  <StyledTableCell>{row.email}</StyledTableCell>
                  <StyledTableCell>
                    <Box
                      sx={{
                        maxWidth: 150,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.publicKey}
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell>{row.balance}</StyledTableCell>
                  <StyledTableCell>
                    {new Date(row.createdAt).toLocaleString()}
                  </StyledTableCell>
                  <StyledTableCell>
                    {new Date(row.updatedAt).toLocaleString()}
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
