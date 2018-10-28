import { IQuickGeneralTableHeader } from '../interface/quick-general-table-dto';

export class QuickGeneralTableConstants {
  public static revenueHeaderTab: IQuickGeneralTableHeader = {
    header: 'Doanh Thu Cao Nhất ($b)',
    table1: {
      header: 'Năm'
    },
    table2: {
      header: 'Quý'
    },
    table3: {
      header: 'TTM'
    }
  };

  public static highestRevenueHeaderTab: IQuickGeneralTableHeader = {
    header: 'Tăng trưởng Doanh Thu Cao Nhất (%)',
    table1: {
      header: 'Năm'
    },
    table2: {
      header: 'Quý'
    },
    table3: {
      header: 'TTM'
    }
  };

  public static profitHeaderTab: IQuickGeneralTableHeader = {
    header: 'Lợi nhuận cao nhất ($b)',
    table1: {
      header: 'Năm'
    },
    table2: {
      header: 'Quý'
    },
    table3: {
      header: 'TTM'
    }
  };

  public static highestProfitHeaderTab: IQuickGeneralTableHeader = {
    header: 'Tăng trưởng Lợi nhuận cao nhất (%)',
    table1: {
      header: 'Năm'
    },
    table2: {
      header: 'Quý'
    },
    table3: {
      header: 'TTM'
    }
  };

  public static epsHeaderTab: IQuickGeneralTableHeader = {
    header: 'EPS cao Nhất',
    table1: {
      header: 'Năm'
    },
    table2: {
      header: 'Quý'
    },
    table3: {
      header: 'TTM'
    }
  };

  public static highestEPSHeaderTab: IQuickGeneralTableHeader = {
    header: 'Tăng trưởng EPS cao Nhất (%)',
    table1: {
      header: 'Năm'
    },
    table2: {
      header: 'Quý'
    },
    table3: {
      header: 'TTM'
    }
  };

  public static pePbHeaderTab: IQuickGeneralTableHeader = {
    header: 'P/E thấp Nhất',
    table1: {
      header: 'Năm'
    },
    table2: {
      header: 'Quý'
    },
    table3: {
      header: 'TTM'
    }
  };

  public static lowestPePbHeaderTab: IQuickGeneralTableHeader = {
    header: 'P/B thấp Nhất',
    table1: {
      header: 'Năm'
    },
    table2: {
      header: 'Quý'
    },
    table3: {
      header: 'TTM'
    }
  };

  public static mcNwcHeaderTab: IQuickGeneralTableHeader = {
    header: 'MC/NWC thấp Nhất',
    table1: {
      header: 'Năm'
    },
    table2: {
      header: 'Quý'
    },
    table3: {
      header: 'TTM'
    }
  };

  public static lowestMcNwcHeaderTab: IQuickGeneralTableHeader = {
    header: 'EV/EBITDA thấp Nhất',
    table1: {
      header: 'Năm'
    },
    table2: {
      header: 'Quý'
    },
    table3: {
      header: 'TTM'
    }
  };

}
