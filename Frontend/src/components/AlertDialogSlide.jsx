import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide = ({ open, onClose, error }) => {
  const [showModal, setShowModal] = useState(open);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowModal(false);
    }, 5000); 

    return () => {
      clearTimeout(timeoutId); 
    };
  }, [open]); 

  const handleClose = () => {
    onClose(false);
  };

  const modalStyle = {
    position: 'fixed',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'white',
    padding: '16px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    zIndex: 99,
  };

  return (
    <React.Fragment>
      <Dialog
        open={showModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          style: modalStyle,
        }}
      >
        <DialogContent>
          <p>{error}</p>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default AlertDialogSlide;
