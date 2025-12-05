import * as React from 'react';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

function ColorPickerForm({paletteIsFull, colors, addNewColor}){

    const [currentColor, setCurrentColor] = React.useState("teal");
    const [newColorName, setNewColorName] = React.useState("");

    React.useEffect( () => {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
            colors.every(
                ({name}) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isColorUnique', (value) => 
            colors.every(
                ({color}) => color !== currentColor
            )
        );
      });

    const updateCurrentColor = (newColor) => {
        setCurrentColor(newColor.hex)
    }

    const handleChange = (evt) => {
        const {name, value} = evt.target
        if (name === "newColorName") setNewColorName(value);
        if (name === "newPaletteName") setNewPaletteName(value);
    }

    const handleSubmit = () => {
        const newColor = {
            color: currentColor,
            name: newColorName
        }
        addNewColor(newColor);
        setNewColorName("")
    }

    return(
        <div>
            <ChromePicker
              color={currentColor}
              onChangeComplete={updateCurrentColor}
            />
            <ValidatorForm onSubmit={handleSubmit}>
                <TextValidator 
                  value={newColorName}
                  name='newColorName'
                  onChange={handleChange}
                  validators={["required", "isColorNameUnique", "isColorUnique"]}
                  errorMessages ={[
                    "Enter a color name",
                    "Color name must be unique",
                    "Color already used"
                  ]}
                />
                <Button
                  variant='contained'
                  color='primary'
                  style={{backgroundColor: paletteIsFull ? "grey" : currentColor}}
                  disabled={paletteIsFull}
                  type='submit'
                >
                    {paletteIsFull ? "Palette Full" : "Add Color"}
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default ColorPickerForm;