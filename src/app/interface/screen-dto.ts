export interface GramhamNCavDto {
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

export interface GramhamNetDto {
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

export interface CanslimDto {
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

export interface FisherDto {
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

export interface GrahamChecklistDto {
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

