import classes from './Button.module.css'

const Button = (props) => {

    return(
        <div>
            <button className={classes.btn} onClick={props.click} type='button'>{props.btn_name}</button>
        </div>
    )
}

export default Button;