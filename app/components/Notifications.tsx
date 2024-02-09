import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonNote,
  IonLabel,
} from "@ionic/react";

import { close } from "ionicons/icons";
import { NextPage } from "next";
import { Notification } from "@/app/types/type";
import useAppStore from "../hooks/useStore";

const NotificationItem: NextPage<Notification> = ({ title, when }) => (
  <IonItem>
    <IonLabel>{title}</IonLabel>
    <IonNote slot="end">{when}</IonNote>
    <IonButton slot="end" fill="clear" color="dark">
      <IonIcon icon={close} />
    </IonButton>
  </IonItem>
);

interface NotificationsProps {
  open: boolean;
  onDidDismiss: () => void;
}
const Notifications: NextPage<NotificationsProps> = ({
  open,
  onDidDismiss,
}) => {
  const { notifications } = useAppStore();

  return (
    <IonModal isOpen={open} onDidDismiss={onDidDismiss}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notifications</IonTitle>
          <IonButton
            slot="end"
            fill="clear"
            color="dark"
            onClick={onDidDismiss}
          >
            <IonIcon icon={close} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Notifications</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {notifications.map((notification, i) => (
            <NotificationItem
              title={notification.title}
              when={notification.when}
              key={i}
            />
          ))}
        </IonList>
      </IonContent>
    </IonModal>
  );
};

export default Notifications;
