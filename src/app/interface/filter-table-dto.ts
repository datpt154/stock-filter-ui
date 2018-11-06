import { BasicFilterDTO } from './basic-filter-dto';

export interface FilterTableColumn {
    title: string;
    code: string;
    sortType: SortType;
    showChart?: boolean;
    width?: number;
    dataType?: DataType;
}

export enum SortType {
    ASD,
    DESC,
    DEFAULT,
    NONE
}

export enum DataType {
    Number,
    String
}

export interface TableData {
    title: string;
    header: FilterTableColumn[];
    body: BasicFilterDTO[];
    data: BasicFilterDTO[];
    pagination: {
        visible: boolean,
        size: number,
        total: number,
        currentPage: number
    };
}
