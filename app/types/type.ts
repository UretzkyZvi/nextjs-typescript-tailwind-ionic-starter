
export interface Item {
    name: string;
    done?: boolean;
}

export interface ListItem {
    id: string;
    name: string;
    items?: Item[];
    done?: boolean;
}


export interface Notification {
    title: string;
    when: string;
}

export interface HomeItem {
    title: string;
    type: string;
    text: string;
    author: string;
    authorAvatar: string;
    image: string;
}