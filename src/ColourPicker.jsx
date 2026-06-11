import React, {useState} from 'react';

function ColourPicker() {

    const [colour, setColour] = useState("#FFFFFF");

    function handleColorChange(e){
        setColour(e.target.value);
    }
    return( <div className="colour-picker-container">
            <h1> Colour Picker </h1>
            <div className="colour-display" style={{backgroundColor: colour}}>
                <p>Selected colour: {colour}</p>
            </div>
            <label> Choose a colour: </label>
            <input type="color" value={colour} onChange={handleColorChange} />
            </div>);
}

export default ColourPicker