import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useModal } from "./Context";

const ModalBox = () => {
  const { showModal, setShowModal } = useModal();

  const handleClose = () => { 
    setShowModal(false);
  };

  return (
    <>
      <Dialog open={showModal} onClose={handleClose}>
        <DialogTitle>tumblr</DialogTitle>
        <DialogContent>
          <p>Welcome to your corner of the internet. You'll never be bored again.</p>
          <p>Sign up or log in:</p>
          <div className="buttonContainer">
            <Button variant="outlined">
              <i>googleIcon</i>
              <p>Continue with Google</p>
            </Button>
            <Button variant="outlined">
              <i>appleIcon</i>
              <p>Continue with Apple</p>
            </Button>
            <Button variant="outlined">
              <i>emailIcon</i>
              <p>Continue with email</p>
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalBox;
