import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Select, FormControl, MenuItem, InputLabel } from "@mui/material";

export const ModalForm = ({ open, handleClose, handleSubmit, id }) => {
  const [formData, setFormData] = useState({
    name: "",
    wallet_address: "",
    amount: '',
    frequency: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData, id);
    handleClose(); // Close modal after submitting
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Submit Your Details</DialogTitle>
      <DialogContent>
        <form onSubmit={onSubmit}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            margin="dense"
            id="wallet_address"
            label="Wallet Address"
            type="text"
            fullWidth
            name="wallet_address"
            value={formData.wallet_address}
            onChange={handleChange}
            required
          />
               <TextField
            margin="dense"
            id="amount"
            label="Amount"
            type="number"
            fullWidth
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
          <FormControl fullWidth margin="dense" required>
  <InputLabel id="frequency-label">Frequency</InputLabel>
  <Select
    labelId="frequency-label"
    id="frequency"
    name="frequency"
    value={formData.frequency}
    onChange={handleChange}
    label="Frequency"
  >
    <MenuItem value="daily">Daily</MenuItem>
    <MenuItem value="weekly">Weekly</MenuItem>
    <MenuItem value="monthly">Monthly</MenuItem>
    <MenuItem value="yearly">Yearly</MenuItem>
  </Select>
</FormControl>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">Cancel</Button>
            <Button type="submit" color="primary">Submit</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// const App = () => {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleFormSubmit = (data) => {
//     console.log("Form Data:", data);
//     // Handle form submission logic here (e.g., send to API)
//   };

//   return (
//     <div>
//       <Button variant="contained" color="primary" onClick={handleOpen}>
//         Open Form Modal
//       </Button>
//       <ModalForm open={open} handleClose={handleClose} handleSubmit={handleFormSubmit} />
//     </div>
//   );
// };

// export default App;
