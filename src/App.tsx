import { IonApp, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';


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
import Display from './components/Display';
import { useState } from 'react';
import {evaluate} from 'mathjs'




const App: React.FC = () => {

  const [state,setState] = useState({data: ''})

  const calculate = () => {
    try {
      const result = evaluate(state.data)
    setState({data: result})
    } catch (error) {
      setState({data: 'Syntax Error'})
      console.log(error)
    }
    
  }

  const handleClick = (e: any) => {
    const value = e.target.id;
        switch(value) {
            case 'AC':
                setState({ data: ''});
                break;
            case '⌫':
              if(state.data.length>1){
                setState({data : state.data.slice(0,state.data.length-1)}) 
              }
                break; 
            case '=':
                calculate();
                break;
            default:
                setState({data: state.data + value});
        }
  }

  return(
    <div style={{backgroundColor: "red"}}>
      <IonApp style={{height:"500px",margin: "auto"}}>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
            <Display data={state.data}/>
            </IonCol>
          </IonRow>
        <IonRow>
            <IonCol><Button click={handleClick} value={"AC"} /></IonCol>
            <IonCol><Button click={handleClick} color={"op"} value={"÷"} /></IonCol>
            <IonCol size="3"><Button click={handleClick} color={"op"} value={"⌫"} /></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><Button click={handleClick} value={"7"} label={"7"} /></IonCol>
            <IonCol><Button click={handleClick} value={"8"} /></IonCol>
            <IonCol><Button click={handleClick} value={"9"} /></IonCol>
            <IonCol><Button click={handleClick} color={"op"} value={"×"} /></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><Button click={handleClick} value={"4"} /></IonCol>
            <IonCol><Button click={handleClick} value={"5"} /></IonCol>
            <IonCol><Button click={handleClick} value={"6"} /></IonCol>
            <IonCol><Button click={handleClick} color={"op"} value={"-"} /></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><Button click={handleClick} value={"1"} /></IonCol>
            <IonCol><Button click={handleClick} value={"2"} /></IonCol>
            <IonCol><Button click={handleClick} value={"3"} /></IonCol>
            <IonCol><Button click={handleClick} color={"op"} value={"+"} /></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><Button click={handleClick} value={"0"} /></IonCol>
            <IonCol size="3"><Button click={handleClick} value={"."} /></IonCol>
            <IonCol size="3"><Button click={handleClick} color={"op"} value={"="} label={"="} /></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
    </div>
  );
}

export default App;
