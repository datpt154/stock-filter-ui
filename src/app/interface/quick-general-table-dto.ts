export interface IQuickGeneralTableHeader {
  header: string;
  table1: {
    header: string;
    headerColumn1: string;
    headerColumn2: string;
  };
  table2: {
    header: string;
    headerColumn1: string;
    headerColumn2: string;
  };
  table3: {
    header: string;
    headerColumn1: string;
    headerColumn2: string;
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
