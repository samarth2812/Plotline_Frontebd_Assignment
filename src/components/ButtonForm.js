// components/ButtonForm.jsx
import React from "react";

const ButtonForm = ({ selectedButton, buttons, onPropertyChange }) => {
  if (selectedButton === null) {
    return null;
  }

  const selectedButtonData = buttons[selectedButton];

  return (
    <div className="form-container">
      <h4>Edit Button Properties:</h4>
      <label>
        Text:
        <input
          type="text"
          value={selectedButtonData.text}
          onChange={(e) =>
            onPropertyChange(selectedButton, "text", e.target.value)
          }
        />
      </label>
      <label>
        Text Color:
        <input
          type="text"
          value={selectedButtonData.text}
          onChange={(e) =>
            onPropertyChange(selectedButton, "text", e.target.value)
          }
        />
      </label>
      {/* Other property fields */}
    </div>
  );
};

export default ButtonForm;
