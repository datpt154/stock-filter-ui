export interface BasicFilterDTO {
  companyName: string;
  companyCode: string;
  searchItems: SearchItemDTO[];
  stockExchange: string;
  price: number;
  index?: number;
}

interface SearchItemDTO {
  code: string;
  value: number;
}
