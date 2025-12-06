import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

function PaletteMetaForm({palettes, handleSubmit}){
    const [open, setOpen] = React.useState(false);
    const [newPaletteName, setNewPaletteName] = React.useState("");

    React.useEffect( () => {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => 
            palettes.every(
                ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
      });

      const handleChange = (evt) => {
        const {name, value} = evt.target
        if (name === "newColorName") setNewColorName(value);
        if (name === "newPaletteName") setNewPaletteName(value);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
            <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
                <TextValidator
                    label="Palette Name"
                    value={newPaletteName}
                    name='newPaletteName'
                    onChange={handleChange}
                    validators={["required", "isPaletteNameUnique"]}
                    errorMessages={["Enter Palette Name", "Name already used"]}
                />
                <Button variant='contained' color='primary' type='submit'>Save Palette</Button>
            </ValidatorForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default PaletteMetaForm;