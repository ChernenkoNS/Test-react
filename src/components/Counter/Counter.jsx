import css from '../Counter/Counter.module.css'

export const Counter = () => {
    return (
        <div className={css.cont}>
            <span>0</span>
            <div >
                <button className={css.btn}>+</button>
                <button className={css.btn}>-</button>
            </div>
        </div>
    ) 
}