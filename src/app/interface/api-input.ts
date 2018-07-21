import { DataItem } from "./data-item";

export interface BasicFilterInput {
    time: string,
    stockExchanges: string[],
    searchDataitems: DataItem[];
}