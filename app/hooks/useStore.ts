import { create } from 'zustand'
import { lists, homeItems, notifications } from '@/app/mock/data';
import { ListItem,Notification ,HomeItem, Item} from '../types/type';



interface Store {
    safeAreaTop: number;
    safeAreaBottom: number;
    menuOpen: boolean;
    notificationsOpen: boolean;
    currentPage: string | null;
    homeItems: HomeItem[];
    lists: ListItem[];
    notifications: Notification[];
    settings: {
        enableNotifications: boolean;
    };
    setMenuOpen: (menuOpen: boolean) => void;
    setNotificationsOpen: (notificationsOpen: boolean) => void;
    setSettings: (settings: { enableNotifications: boolean }) => void;
    setDone: (itemId: string, item:Item, done: boolean) => void;

}


const useAppStore = create<Store>((set, get) => ({
    // Initial state
    safeAreaTop: 0,
    safeAreaBottom: 0,
    menuOpen: false,
    notificationsOpen: false,
    currentPage: null,
    homeItems: homeItems,
    lists: lists,
    notifications: notifications,
    settings: {
        enableNotifications: true,
    },

    // Actions
    setMenuOpen: (menuOpen: boolean) => set({ menuOpen }),
    setNotificationsOpen: (notificationsOpen: boolean) => set({ notificationsOpen }),
    setSettings: (settings) => set((state) => ({ settings: { ...state.settings, ...settings } })),
    setDone: (itemId,item, done) => {
        // Implement logic to mark an item as done, example for `homeItems`
        const filteredItems = get().lists.find((list) => list.id === itemId);
        if (!filteredItems) return;
        filteredItems.items = filteredItems.items ?? [];
        filteredItems.items = filteredItems.items.map((i) => {
            if (i.name === item.name) {
                i.done = done;
            }
            return i;
        });
        const updatedItems = get().lists.map((list) => {
            if (list.id === itemId) {
                return filteredItems;
            }
            return list;
        });
        set({ lists: updatedItems });
    },

}));

export default useAppStore;

