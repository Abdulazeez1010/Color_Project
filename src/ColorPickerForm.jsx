import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

const StyledChromePicker = styled(ChromePicker)({
  width: "100% !important",
  marginTop: "2rem"
});

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
        <div style={{width: "100%"}}>
            <StyledChromePicker
                color={currentColor}
                onChangeComplete={updateCurrentColor}
            />
            <ValidatorForm onSubmit={handleSubmit}>
                    <TextValidator 
                      value={newColorName}
                      placeholder='Color Name'
                      name='newColorName'
                      variant='filled'
                      margin='normal'
                      onChange={handleChange}
                      validators={["required", "isColorNameUnique", "isColorUnique"]}
                      errorMessages ={[
                        "Enter a color name",
                        "Color name must be unique",
                        "Color already used"
                      ]}
                      sx={{width: "100%", height: "70px"}}
                    />
                    <Button
                        variant='contained'
                        color='primary'
                        style={{backgroundColor: paletteIsFull ? "grey" : currentColor}}
                        disabled={paletteIsFull}
                        type='submit'
                        sx={{
                            width: "100%",
                            padding: "1rem",
                            marginTop: "1rem",
                            fontSize: "2rem"
                        }}
                    >
                        {paletteIsFull ? "Palette Full" : "Add Color"}
                    </Button>
            </ValidatorForm>
        </div>
    )
}

export default ColorPickerForm;