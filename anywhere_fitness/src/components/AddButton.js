import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    }));



export default function FormDialog() {

    const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <div>
      <Fab color="primary" onClick={handleClickOpen} variant="extended" className={classes.fab} >
            <AddIcon  className={classes.extendedIcon}/>
            Add Session
        </Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Fill out the form and select 'ADD Session' to add a session.</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Trainer"
            type="trainer"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Start Time"
            type="start Time"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Duration"
            type="duration"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Location"
            type="location"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Workout Type"
            type="workout type"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Add Session
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}