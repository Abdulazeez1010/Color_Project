import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import EmojiPicker from 'emoji-picker-react';

function PaletteMetaForm({palettes, handleSubmit, hideForm}){
    const [open, setOpen] = React.useState(true);
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

  return (     
    <Dialog open={open} onClose={hideForm}>
    <DialogTitle>Choose a Palette Name</DialogTitle>
    <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
    <DialogContent>
        <DialogContentText>
        Please enter a name for your new beautiful palette. Make sure it's unique!
        </DialogContentText>
        <EmojiPicker />
        <TextValidator
            label="Palette Name"
            value={newPaletteName}
            name='newPaletteName'
            onChange={handleChange}
            fullWidth
            margin="normal"
            validators={["required", "isPaletteNameUnique"]}
            errorMessages={["Enter Palette Name", "Name already used"]}
        />
    </DialogContent>
    <DialogActions>
        <Button onClick={hideForm}>Cancel</Button>
        <Button variant='contained' color='primary' type='submit'>Save Palette</Button>
    </DialogActions>
    </ValidatorForm>
    </Dialog>
  );
}

export default PaletteMetaForm;