import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonRow, IonSpinner, IonTitle, IonToolbar, useIonAlert } from "@ionic/react";
import { useState } from "react";
import { Header } from "../components/header";
import { selectFile } from "../utils/fileUtils";

interface PayslipDetailsProps {
    id: number,
    from: string,
    to: string,
    file: string
}
function PayslipDetails(props: PayslipDetailsProps) {
    const [loading, setLoading] = useState(false);
    const downloadCLick = () => {
        setLoading(true);
        selectFile(props.file)
        ?.then( () => {
            setLoading(false)
        })
    }

    return (
        <>
          <Header title="Payslip Details" />
          <IonContent className="ion-padding">
                <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Payslip ID: #{props.id}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                        <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonLabel>from: {props.from}</IonLabel>
                            </IonCol>
                            <IonCol>
                                <IonLabel>to: {props.to}</IonLabel>
                            </IonCol>
                        </IonRow>
                        
                        
                        
                        </IonGrid>
                </IonCardContent>
                </IonCard>
                {
                    loading ?  
                    <IonRow class="ion-justify-content-center">
                        <IonSpinner ></IonSpinner>
                    </IonRow> 
                : 
                <IonButton expand="block" onClick={downloadCLick}>Download payslip</IonButton>
                }
                
              
          </IonContent>
        </>
      );
}

export default PayslipDetails;

