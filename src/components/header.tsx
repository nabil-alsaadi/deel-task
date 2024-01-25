import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from "@ionic/react"

export const Header = (props: any) => {
    return (
        <>
            <IonHeader>
            <IonToolbar >
                <IonButtons slot="start">
                    <IonBackButton></IonBackButton>
                </IonButtons>
                <IonTitle>{props.title}</IonTitle>
            </IonToolbar>
            </IonHeader>
        </>
    )
}