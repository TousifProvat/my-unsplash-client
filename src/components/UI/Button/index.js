import './style.scss'

const Button = (props) => {

    let btnColor = (variant) => {

        switch(variant){
            case 'primary':    
                return '#3DB46D';
            case 'danger':
                return 'red';
            case 'disabled':
                return 'grey';
            default:
                return '#3DB46D';
        }
    }

    return (
       <button className="btn" style={{ backgroundColor: btnColor(props.variant)}} {...props}>
           {props.text}
       </button>
    )
}

export default Button
