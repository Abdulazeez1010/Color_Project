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
    const [stage, setStage] = React.useState("form");
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

    const showEmojiPicker = () => {
        setStage("emoji")
    }

    const savePalette = (emoji) => {
        const newPalette = {
            paletteName: newPaletteName,
            emoji: emoji.emoji
        }
        handleSubmit(newPalette)
    }

  return (
    <div>
    <Dialog open={stage === "emoji"} onClose={hideForm}>
        <DialogTitle>Choose a Palette Emoji</DialogTitle>
        <EmojiPicker
          previewConfig={{defaultCaption: "Pick a Palette Emoji"}}
          onEmojiClick={savePalette}
        />
    </Dialog>  
    <Dialog open={stage === "form"} onClose={hideForm}>
        <DialogTitle>Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
        <DialogContent>
            <DialogContentText>
            Please enter a name for your new beautiful palette. Make sure it's unique!
            </DialogContentText>
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
    </div>
  );
}

export default PaletteMetaForm;