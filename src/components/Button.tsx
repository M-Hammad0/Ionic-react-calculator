import { IonButton } from '@ionic/react';

interface ButtonI {
    value : string
    color? : string
    click?: (e: any) => any
    label? : string
}

const Button: React.FC<ButtonI> = (props) => {
    var id = props.value
    if(props.value === '×'){
        id = '*'
    }
    if(props.value === '÷'){
        id = '/'
    }
    return (
        <div>
            <IonButton id={id} onClick={props.click} color={props.color || "light"} expand="full" size="large"  >{props.value}</IonButton>
        </div>
    )
}

export default Button
