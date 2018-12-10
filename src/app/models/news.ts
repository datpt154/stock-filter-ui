export interface NewsListItem {
    id: number;
    type: number;
    status: string;
    createdTime: string;
    updatedTime: string;
    title: string;
    thumbnailUrl: string;
    tag: string;
    content: string;
    categoryId: string;
    userId: number
}

export interface EditNewsItem {
    id?: number;
    title: string;
    thumbnailUrl: string;
    listTag: string[];
    content: string;
    categoryId: number
}

export interface NewsCategory {
    id: number;
    code: string;
    name: string;
}