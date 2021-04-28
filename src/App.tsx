import { IonApp, IonButton, IonHeader, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Button from './components/Button';

const App: React.FC = () => (
  <IonApp>
    <IonContent>
      <IonGrid>
      <IonRow>
          <IonCol><Button value={"AC"} /></IonCol>
          <IonCol><Button value={"%"} /></IonCol>
          <IonCol size="3"><Button value={"÷"} /></IonCol>
        </IonRow>
        <IonRow>
          <IonCol><Button value={"7"} /></IonCol>
          <IonCol><Button value={"8"} /></IonCol>
          <IonCol><Button value={"9"} /></IonCol>
          <IonCol><Button value={"×"} /></IonCol>
        </IonRow>
        <IonRow>
          <IonCol><Button value={"4"} /></IonCol>
          <IonCol><Button value={"5"} /></IonCol>
          <IonCol><Button value={"6"} /></IonCol>
          <IonCol><Button value={"-"} /></IonCol>
        </IonRow>
        <IonRow>
          <IonCol><Button value={"1"} /></IonCol>
          <IonCol><Button value={"2"} /></IonCol>
          <IonCol><Button value={"3"} /></IonCol>
          <IonCol><Button value={"+"} /></IonCol>
        </IonRow>
        <IonRow>
          <IonCol><Button value={"0"} /></IonCol>
          <IonCol size="3"><Button value={"."} /></IonCol>
          <IonCol size="3"><Button value={"="} /></IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonApp>
);

export default App;
