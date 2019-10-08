import { DataItem } from "./data-item";

export interface BasicFilterInput {
    time: string;
    stockExchanges: string[];
    searchDataitems: DataItem[];
}

export interface ComparedFilterInput {
    time: string;
    stocks: string[];
    searchDataitems: DataItem[];
}
