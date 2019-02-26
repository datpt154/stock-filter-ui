interface GramhamNCav {
  name: string;
  code: string;
  exchange: string;
  price: number;
  marketCap: number;
  pe: number;
  pb: number;
  eps: number;
  fScrore: number;
  cScrore: number;
  nwc: number;
}

export interface GramhamNCavDto {
  data: GramhamNCav[];
  limitData: boolean;
}

interface GramhamNet {
  cScrore: number;
  code: string;
  eps: number;
  exchange: string;
  fScrore: number;
  marketCap: number;
  name: string;
  nwc: number;
  pb: number;
  pe: number;
  price: number;
}

export interface GramhamNetDto {
  data: GramhamNet[];
  limitData: boolean;
}

interface Canslim {
  cScrore: number;
  code: string;
  eps: number;
  epsYoy: number;
  exchange: string;
  fScrore: number;
  name: string;
  pb: number;
  pe: number;
  price: number;
  roeYoy: number;
}

export interface CanslimDto {
  data: Canslim[];
  limitData: boolean;
}

export interface Fisher {
  cScrore: number;
  code: string;
  debtToEquityRatio: number;
  exchange: string;
  fScrore: number;
  fcf: number;
  grossProfitYoy: number;
  name: string;
  pe: number;
  peg: number;
  price: number;
}

export interface FisherDto {
  data: Fisher[];
  limitData: boolean;
}

interface GrahamChecklist {
  cScrore: number;
  code: string;
  eps: number;
  exchange: string;
  fScrore: number;
  grahamScore: number;
  marketCap: number;
  name: string;
  pb: number;
  pe: number;
  price: number;
}

export interface GrahamChecklistDto {
  data: GrahamChecklist[];
  limitData: boolean;
}

export interface DBTTM {
  name: string;
  code: string;
  exchange: string;
  price: number;
  result: number;
  yoy: number;
  pe: number;
  pb: number;
  eps: number;
  fScrore: number;
  cScrore: number;
}

export interface DBTTMDto {
  data: DBTTM[];
  limitData: boolean;
}
