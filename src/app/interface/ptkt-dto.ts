interface PTKTD {
    breakTime: string;
    code: string;
    icon: string;
    imageLink: string;
    pattern: string;
    stringStatus: string;
    trend: string;
}

export interface PTKTDto {
  data: PTKTD[];
  limitData: boolean;
}
