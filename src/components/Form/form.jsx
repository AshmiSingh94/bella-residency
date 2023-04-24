import * as React from "react";
import { useState } from "react";
import "./form.scss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";

export default function FormDialog(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState();
  const [comments, setcomments] = useState("")

  const handleSubmit = () => {
    props.getQuote({name, email, phone, comments})
  };
  return (
    <Dialog
      className="Form"
      fullWidth={true}
      maxWidth={"xs"}
      open={true}
      onClose={() => {}}
    >
      <DialogTitle className="Form__header">
        Contact us
        <CloseIcon
          className="Form__header__close"
          onClick={props.handleClose}
        />
      </DialogTitle>

      <DialogContent className="Form__content">
        <TextField
          id="Name"
          label="Name"
          variant="standard"
          fullWidth
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          fullWidth
          id="Email"
          label="Email *"
          variant="standard"
          helperText="Valid email address required"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="Phone"
          label="Phone number"
          variant="standard"
          fullWidth
          value={phone}
          onChange={(event) => setphone(event.target.value)}
        />
        <TextField
          fullWidth
          id="standard-multiline-static"
          label="How can we help you?"
          multiline
          rows={2}
          defaultValue=""
          variant="standard"
          value={comments}
          onChange={(event)=>setcomments(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
