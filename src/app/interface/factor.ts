import { DataItem } from "./data-item";

export interface Factor {
  code: string;
  title: string;
  dataItems: DataItem[];
}

export interface FactorNew {
  title: string;
  code: string;
  isSelected: boolean;
  isShow: boolean;
  ranges: Range[];
}

interface Range {
  key: string;
  value: string;
}
