import React, { useState } from 'react'
import './ButtonGrid.css'

function ButtonGrid() {
    const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "teal", "brown"];
    // const ButtonCount = Array.from({ length: 9 }, (_, i) => i + 1);

    const [buttons, setButtons] = useState(
        Array(9).fill({ color: "", disabled: false })
      );
      const [colorIndex, setColorIndex] = useState(0);

    const handleClick = (index) => {
        if (buttons[index].disabled || colorIndex >= colors.length) return;

        const updatedButtons = [...buttons];
        updatedButtons[index] = {
            color: colors[colorIndex],
            disabled: true
        };

        setButtons(updatedButtons);
        setColorIndex(prev => prev + 1);
    };
    const handleReset = () => {
        setButtons(Array(9).fill({ color: "", disabled: false }));
        setColorIndex(0);  
      };
      
  return (
    <div className="grid-container">
      {
        buttons.map((btn, index) => {
            return (
              <button
                key={index}
                onClick={() => handleClick(index)}
                disabled={btn.disabled}
                style={{ backgroundColor: btn.color || "lightgray" }}
              >
                Button {index + 1}
              </button>
            );
          })          
      }
      <button onClick={handleReset} className="reset-button">Reset all </button>

    </div>
  )
}

export default ButtonGrid
