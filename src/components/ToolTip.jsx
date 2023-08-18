import React from 'react'
import { useState } from 'react';
import styles from "../styles/Main.module.css";
const initialButtons = [
    {
      id: 1,
      text: "Button 1",
      color: "#FFFFFF",
      textSize: "13",
      padding: "8",
      textColor: "#000000",
      width: "76px",
      borderRadius: "4",
      width: "76",
      height: "30",
      position: { top: 16, left: 20 },
    },
    {
      id: 2,
      text: "Button 2",
      color: "#FFFFFF",
      textSize: "13",
      width: "76",
      height: "30",
      padding: "8",
      textColor: "#000000",
      width: "76px",
      borderRadius: "4",
      position: { top: 16, right: 20 },
    },
    {
      id: 3,
      text: "Button 3",
      color: "#FFFFFF",
      textSize: "13",
      padding: "8",
      textColor: "#000000",
      width: "76px",
      width: "76",
      height: "30",
      borderRadius: "4",
      position: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
    },
    {
      id: 4,
      text: "Button 4",
      color: "#FFFFFF",
      textSize: "13",
      padding: "8",
      width: "76",
      height: "30",
      textColor: "#000000",
      width: "76px",
      borderRadius: "4",
      position: { bottom: 34, left: 20 },
    },
    {
      id: 5,
      text: "Button 5",
      color: "#FFFFFF",
      textSize: "13",
      padding: "8",
      width: "76",
      height: "30",
      textColor: "#000000",
      width: "76px",
      borderRadius: "4",
      position: { bottom: 34, right: 20 },
    },
  ];
const ToolTip = () => {
    
    const [selectedButton, setSelectedButton] = useState(1);
    const [buttons, setButtons] = useState(initialButtons);
    const handlePropertyChange = (property, value) => {
        setButtons((prevButtons) =>
          prevButtons.map((button) =>
            button.id === selectedButton ? { ...button, [property]: value } : button
          )
        );
      };
    const selectedButtonData = buttons.find(
        (button) => button.id === selectedButton
      );
  return (
    <div className="button-form">
    <div className={styles.cont1}>
      {selectedButtonData && (
        <form className={styles.box}>
          <div className="dropdown">
            <label className={styles.sub_head}>Target Element</label>
            <select
              className={styles.options}
              value={selectedButton}
              onChange={(e) =>
                setSelectedButton(parseInt(e.target.value))
              }
            >
              {buttons.map((button) => (
                <option key={button.id} value={button.id}>
                  Button {button.id}
                </option>
              ))}
            </select>
          </div>
          <label className={styles.sub_head}>
            Tooltip text <br></br>
            <input
              className={styles.options}
              type="text"
              placeholder="Input"
              value={selectedButtonData.text}
              onChange={(e) =>
                handlePropertyChange("text", e.target.value)
              }
            />
          </label>
          <div className={styles.two}>
            <label className={styles.sub_head1}>
              Text Size <br />
              <input
                type="number"
                className={styles.sub_option}
                value={selectedButtonData.textSize}
                onChange={(e) =>
                  handlePropertyChange("textSize", e.target.value)
                }
              />
            </label>
            <label className={styles.sub_head2}>
              Padding <br />
              <input
                className={styles.sub_option}
                type="number"
                value={selectedButtonData.padding}
                onChange={(e) =>
                  handlePropertyChange("padding", e.target.value)
                }
              />
            </label>
          </div>
          <label className={styles.sub_head}>
            Text Color <br />
            <input
              type="text"
              placeholder="Input"
              className={styles.options}
              value={selectedButtonData.textColor}
              onChange={(e) =>
                handlePropertyChange("textColor", e.target.value)
              }
            />
          </label>
          <label className={styles.sub_head}>
            Background Color <br />
            <input
              type="text"
              className={styles.options}
              value={selectedButtonData.color}
              onChange={(e) =>
                handlePropertyChange("color", e.target.value)
              }
            />
          </label>
          <div className={styles.two}>
            <label className={styles.sub_head1}>
              Corner Radius: <br />
              <input
                type="number"
                className={styles.sub_option}
                value={selectedButtonData.borderRadius}
                onChange={(e) =>
                  handlePropertyChange("borderRadius", e.target.value)
                }
              />
            </label>
            <label className={styles.sub_head2}>
              Tooltip width <br />
              <input
                type="number"
                className={styles.sub_option}
                value={selectedButtonData.width}
                onChange={(e) =>
                  handlePropertyChange("width", e.target.value)
                }
              />
            </label>
          </div>
          <div className={styles.two}>
            <label className={styles.sub_head1}>
              Arrow width <br />
              <input
                type="number"
                className={styles.sub_option}
                placeholder="3"
              />
            </label>
            <label className={styles.sub_head2}>
              Arrow Height <br />
              <input
                type="number"
                className={styles.sub_option}
                placeholder="3"
              />
            </label>
          </div>
        </form>
      )}
    </div>
  </div>

  )
}

export default ToolTip