import css from "../Counter/Counter.module.css";
import React from "react";

export const Controls = ({onIncrement, onDescrement}) => (
   <div>
          <button
            className={css.btn}
            type="button"
            onClick={onIncrement}
          >
            +
          </button>
          <button
            className={css.btn}
            type="button"
            onClick={onDescrement}
          >
            -
          </button>
        </div>)
