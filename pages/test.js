import React, { useState } from "react";
import { ChromePicker } from "react-color";

const Test = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const popover = {
    position: "absolute",
    zIndex: "2",
  };
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };
  const [colors, setColors] = useState(null);
  const colorPicker = (e) => {
    const newColor = {
      hex: e.hex,
      rgb: "(" + e.rgb.r + "," + e.rgb.g + "," + e.rgb.b + "," + e.rgb.a + ")",
    };
    setColors(newColor);
  };
  return (
    <>
      {" "}
      <div>
        {colors && (
          <div
            className="w-full h-[300px]"
            style={{ background: colors.hex }}
          ></div>
        )}

        <button className="bg-primary p-5 text-white" onClick={handleClick}>
          Pick Color
        </button>
        {true ? (
          <div style={popover}>
            <div style={cover} onClick={handleClose} />
            <ChromePicker
              color={colors !== null && colors.hex}
              onChange={(e) => colorPicker(e)}
              disableAlpha
              renderers={false}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Test;
