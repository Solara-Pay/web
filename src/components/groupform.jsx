import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from "@mui/material";

export const ModalForm = ({ open, handleClose, handleSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
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
          {/* <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          /> */}
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
