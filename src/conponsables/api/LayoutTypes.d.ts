export declare namespace LayoutTypes {
    export interface LayoutTab {
        icon: string;
        name: string;
        title: string;
    }
    export interface ArticleTypes {
        id: number;
        title: string;
        url?: string;
    }
    export interface ArticleCardTypes {
        id: number;
        imgUrl?: string[];
        title: string;
        isTop: boolean;
        author?: string;
        desc?: string;
        date: string;
        url?: string;
        channel?: string;
    }
}
