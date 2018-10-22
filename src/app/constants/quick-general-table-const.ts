import { IQuickGeneralTableHeader } from '../interface/quick-general-table-dto';

export class QuickGeneralTableConstants {
  public static revenueHeaderTab: IQuickGeneralTableHeader = {
    header: 'Doanh Thu Cao Nhất',
    table1: {
      header: 'Năm',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'Doanh thu($b)'
    },
    table2: {
      header: 'Quý',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'Doanh thu($b)'
    },
    table3: {
      header: 'TTM',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'Doanh thu($b)'
    }
  };

  public static highestRevenueHeaderTab: IQuickGeneralTableHeader = {
    header: 'TT Doanh Thu Cao Nhất(18)',
    table1: {
      header: 'Năm',
      headerColumn1: 'TT doanh thu cao nhất(18)',
      headerColumn2: 'TT doanh thu(%)'
    },
    table2: {
      header: 'Quý',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'TT doanh thu($)'
    },
    table3: {
      header: 'TTM',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'TT doanh thu($)'
    }
  };

  public static profitHeaderTab: IQuickGeneralTableHeader = {
    header: 'Lợi nhuận cao nhất (4)',
    table1: {
      header: 'Năm',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'Lợi nhuận($b)'
    },
    table2: {
      header: 'Quý',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'Lợi nhuận($b)'
    },
    table3: {
      header: 'TTM',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'Lợi nhuận($b)'
    }
  };

  public static highestProfitHeaderTab: IQuickGeneralTableHeader = {
    header: 'TT Lợi nhuận cao nhất (19)',
    table1: {
      header: 'Năm',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'TT lợi nhuận(%)'
    },
    table2: {
      header: 'Quý',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'TT Lợi nhuận(%)'
    },
    table3: {
      header: 'TTM',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'TT Lợi nhuận'
    }
  };

  public static epsHeaderTab: IQuickGeneralTableHeader = {
    header: 'EPS cao Nhất(6)',
    table1: {
      header: 'Năm',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'EPS($k)'
    },
    table2: {
      header: 'Quý',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'EPS($)'
    },
    table3: {
      header: 'TTM',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'EPS($)'
    }
  };

  public static highestEPSHeaderTab: IQuickGeneralTableHeader = {
    header: 'EPS cao Nhất(20)',
    table1: {
      header: '',
      headerColumn1: '',
      headerColumn2: 'TT EPS(%)'
    },
    table2: {
      header: 'Quý',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'TT EPS(%)'
    },
    table3: {
      header: 'TTM',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'TT EPS(%)'
    }
  };

  public static pePbHeaderTab: IQuickGeneralTableHeader = {
    header: 'P/E thấp Nhất(26)',
    table1: {
      header: 'Năm',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'P/E'
    },
    table2: {
      header: 'Quý',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'P/E'
    },
    table3: {
      header: 'TTM',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'P/E'
    }
  };

  public static lowestPePbHeaderTab: IQuickGeneralTableHeader = {
    header: 'P/B thấp Nhất(28)',
    table1: {
      header: 'Năm',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'P/B'
    },
    table2: {
      header: 'Quý',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'P/B'
    },
    table3: {
      header: 'TTM',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'P/B'
    }
  };

  public static mcNwcHeaderTab: IQuickGeneralTableHeader = {
    header: 'MC/NWC thấp Nhất(29)',
    table1: {
      header: 'Năm',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'MC/NWC'
    },
    table2: {
      header: 'Quý',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'MC/NWC'
    },
    table3: {
      header: 'TTM',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'MC/NWC'
    }
  };

  public static lowestMcNwcHeaderTab: IQuickGeneralTableHeader = {
    header: 'MC/NWC thấp Nhất(30)',
    table1: {
      header: 'Năm',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'MC/NWC'
    },
    table2: {
      header: 'Quý',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'MC/NWC'
    },
    table3: {
      header: 'TTM',
      headerColumn1: 'Mã Ck',
      headerColumn2: 'MC/NWC'
    }
  };

}
