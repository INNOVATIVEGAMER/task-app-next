import { LogOutUser } from "@/APIFunctions/auth";
import { useAuth } from "@/Context/Auth";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { SlideUpTransition } from "../common/Transitions";

interface Props {}

const LogoutButton = (props: Props) => {
  const { authToken, logout } = useAuth();
  const [dialogopen, setdialogOpen] = useState<boolean>(false);

  const handleClickDialogOpen = () => {
    setdialogOpen(true);
  };

  const handleClickDialogClose = () => {
    setdialogOpen(false);
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: LogOutUser,
    onSuccess: () => {
      logout();
    },
  });

  const handleLogOut = () => {
    if (!authToken) return;

    mutate({ AUTH_TOKEN: authToken });
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickDialogOpen}
        disabled={isLoading}
        color="error"
      >
        Logout
      </Button>
      <Dialog
        open={dialogopen}
        TransitionComponent={SlideUpTransition}
        keepMounted
        onClose={handleClickDialogClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Logout From Nexus</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you really want to logout ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickDialogClose}>Disagree</Button>
          <Button onClick={handleLogOut}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LogoutButton;
