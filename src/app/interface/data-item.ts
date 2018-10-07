export interface DataItem {
  code: string;
  title: string;
  max: number;
  min: number;
  selectedValues: number[];
  isSelected: boolean;
  isShow: boolean;
  unit: string;
  step: number;
}
