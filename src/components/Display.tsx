import { IonInput, IonItem } from "@ionic/react";

interface DisplayI {
  data: string;
}

const Display: React.FC<DisplayI> = ({ data }) => {
  return (
    <div>
      <IonItem>
        <div style={{margin: "0 0 0 auto"}}>
          <IonInput style={{width: "inherit",textAlign: "right"}} placeholder="0" value={data}></IonInput>
        </div>
      </IonItem>
    </div>
  );
};

export default Display;
