export interface DataItem {
  code: string;
  title: string;
  max: number;
  min: number;
  selectedValues: number[];
  isSelected: boolean;
  unit: string;
  // step: number;
}