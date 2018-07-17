export interface BasicFilterDTO {
  companyName: string,
  companyCode: string,
  searchItems: SearchItemDTO[];
}

interface SearchItemDTO {
  code: string;
  value: number;
}