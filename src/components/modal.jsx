import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant='contained' size='small' onClick={handleOpen}>
        Help
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box style={style}>
          <Grid container sx={{ backgroundColor: "white" }}>
            <ul>
              <li>
                <strong>{"euler -> np.e"}</strong>
              </li>
              <br />
              <li>
                <strong>{"euler^x -> np.exp()"}</strong>
              </li>
              <br />
              <li>
                <strong>{"cos() -> np.cos()"}</strong>
              </li>
              <br />
              <li>
                <strong>{"Raiz √-> np.sqrt()"}</strong>
              </li>
              <br />
              <li>
                <strong>{"exp ^ -> **"}</strong>
              </li>
            </ul>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
