import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonNavLink, IonRow, IonSpinner, IonTitle, IonToolbar } from "@ionic/react";
import PayslipDetails from "./PayslipDetails";

import { chevronForward } from "ionicons/icons"

import { payslipsRequested } from "../actions/payslips";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Header } from "../components/header";

const Payslips = (props: any) => {

    useEffect(() => {
        props.fetchPayslips()
    },[])

    return <>
    <Header title="Payslips" />
    <IonContent className="ion-padding" color="light">
     
      <IonList inset={true}>
    {
        props.data.length !== 0 ?  
        props.data.map((element: any) => (
            <IonNavLink routerDirection="forward" component={() => <PayslipDetails {...element} />}>
                <IonItem>
                <IonLabel>from: {element.from}</IonLabel>
                <IonLabel>to: {element.to}</IonLabel>
                <IonIcon icon={chevronForward} slot="end"/>
                </IonItem>
            </IonNavLink>
            
        ))
        :
        <IonRow class="ion-justify-content-center">
            <IonSpinner ></IonSpinner>
        </IonRow>
         
    }
     
    </IonList>

    </IonContent>
  </>
}


const mapStateToProps = (state: any) => {
	console.log('state',state)
	return {
		data: state.payslips.data ?? [],
		isLoading: state.payslips.isLoading,
		
	};
};

const mapDispatchToProps = {
	fetchPayslips: payslipsRequested
};

export default connect(mapStateToProps,mapDispatchToProps)(Payslips);