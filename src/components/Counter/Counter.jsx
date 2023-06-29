import React from "react";
import css from "../Counter/Counter.module.css";
import { Controls } from "./Controls";

// export const Counter = () => {
//     return (
//         <div className={css.cont}>
//             <span>0</span>
//             <div >
//                 <button className={css.btn}>+</button>
//                 <button className={css.btn}>-</button>
//             </div>
//         </div>
//     )
// }

export class Counter extends React.Component {
  static defaultProps = {
    initialValue: 22,
  }

  state = {
    value: this.props.initialValue
  }

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
    // console.log('Click');
    // console.log(event.type);
    // event доступен только в синхронном коде. Мосле выполнения ф-ии его значение будет очищено.
    // для сохранения значения его необходимо записать в переменную
    // const {target} = event
    // console.log(target);
  };

  /// вариант без return 
  handleDecrement = () => {
    this.setState(prevState => ({
        value: prevState.value - 1,
      }))
  };
  render() {
    return (
      <div className={css.cont}>
        <span>{this.state.value}</span>
        {console.log(Controls)}
        <Controls 
        onIncrement={this.handleIncrement} 
        onDescrement={this.handleDecrement} />
      
      </div>
    );
  }
}
