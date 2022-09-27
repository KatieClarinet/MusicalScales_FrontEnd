import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import E_Major from "../Assets/Emajor.png"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
//   bgcolor: 'background.paper',
  bgcolor: "#64D8CB",
  border: '2px solid #000051',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({keySig}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(keySig)


  return (
    <div>
      <Button onClick={handleOpen}>Hint</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {keySig}
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <img src={E_Major} alt={E_Major} style={{ width: "40vw" }}/>
        </Box>
      </Modal>
    </div>
  );
}
