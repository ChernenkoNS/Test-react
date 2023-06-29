import React, { Component } from "react";
import css from "../ColorPicker/ColorPicker.module.css";

export class ColorPicker extends Component {
  state = {
    activeOptionsInx: 2,
  };

setActiveIdx = index => {
  this.setState({activeOptionsInx: index})
}

  render() {
    const {activeOptionsInx} = this.state
    const {options} = this.props
    const {label} = options[activeOptionsInx]
    return (
      <div>
        <h2>Color Picker</h2>
        <p>Color: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={css.colorCard}
              style={{
                backgroundColor: color,
                border:
                  index === activeOptionsInx
                    ? "5px solid black"
                    : 'none',
              }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
