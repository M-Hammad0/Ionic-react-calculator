import { IonButton } from '@ionic/react';

interface ButtonI {
    value : string
}

const Button: React.FC<ButtonI> = (props) => {
    return (
        <div>
            <IonButton color="light" expand="block" >{props.value}</IonButton>
        </div>
    )
}

export default Button
