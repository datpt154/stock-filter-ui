import { BasicFilterDTO } from './basic-filter-dto';

export interface FilterTableColumn {
    title: string;
    code: string;
    sortType: SortType;
}

export enum SortType {
    ASD,
    DESC,
    DEFAULT,
    NONE
}

export interface TableData {
    title: string;
    header: FilterTableColumn[];
    body: BasicFilterDTO[];
    data: BasicFilterDTO[];
    numOfDefaultColumn: number;
    pagination: {
        size: number,
        total: number,
        currentPage: number
    };
}
