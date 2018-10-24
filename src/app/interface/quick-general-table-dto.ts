export interface IQuickGeneralTableHeader {
  header: string;
  table1: {
    header: string;
  };
  table2: {
    header: string;
  };
  table3: {
    header: string;
  };
}

export interface IQuickGeneralTableData {
  dataScreenLeft: {
    dataQuarter: IQuickGeneralTableRow[];
    dataTTM: IQuickGeneralTableRow[];
    dataYear: IQuickGeneralTableRow[];
  };

  dataScreenRight: {
    dataQuarter: IQuickGeneralTableRow[];
    dataTTM: IQuickGeneralTableRow[];
    dataYear: IQuickGeneralTableRow[];
  };
}

interface IQuickGeneralTableRow {
  code: string;
  value: string;
}
