import { DataItem } from "./data-item";

export interface Factor {
  code: string;
  title: string;
  dataItems: DataItem[];
}