import { Snackbar as SnackbarMui } from "@mui/material";

const Snackbar = ({
  autoHideDuration = 5000,
  message,
  openSnackBar,
  closeSnackBar,
  anchorOrigin = {
    vertical: "top",
    horizontal: "left"
  }
}) => {
  return (
    <SnackbarMui
      open={openSnackBar}
      autoHideDuration={autoHideDuration}
      key={message}
      message={message}
      anchorOrigin={anchorOrigin}
      onClose={closeSnackBar}
    />
  )
}

export default Snackbar;