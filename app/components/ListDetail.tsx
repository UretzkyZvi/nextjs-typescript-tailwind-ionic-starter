import {
  IonBackButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router-dom";
import { ListItem } from "../types/type";
import { FC } from "react";
import useAppStore from "../hooks/useStore";

interface ListItemsProps {
  list: ListItem;
}

const ListItems: FC<ListItemsProps> = ({ list }) => {
  return (
    <IonList>
      {(list?.items || []).map((item, key) => (
        <ListItemEntry
          item={{
            name: item.name,
            done: item.done ?? false,
          }}
          key={key}
        />
      ))}
    </IonList>
  );
};

interface ListItemEntryProps {
  item: { name: string; done: boolean };
}
const ListItemEntry: FC<ListItemEntryProps> = ({ item }) => {
  const { setDone } = useAppStore();
  return (
    <IonItem onClick={() => setDone(item.name, item, !item.done)}>
      <IonLabel>{item.name}</IonLabel>
      <IonCheckbox checked={item.done || false} slot="end" />
    </IonItem>
  );
};

const ListDetail = () => {
  const { lists } = useAppStore();
  const params = useParams<{ listId: string }>();
  const { listId } = params;
  const loadedList = lists.find((l) => l.id === listId);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/lists" />
          </IonButtons>
          <IonTitle>{loadedList?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>{loadedList && <ListItems list={loadedList} />}</IonContent>
    </IonPage>
  );
};

export default ListDetail;
