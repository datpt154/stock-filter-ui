import { Factor } from '../interface/factor';

export class FilterConstant {
  public static otherFactors = {
    filterTimes: [
      {
        code: 'quarter',
        value: 'Quý',
        isSelected: false
      },
      {
        code: 'year',
        value: 'Năm',
        isSelected: true
      }
    ],
    stockExchanges: [
      {
        code: 'HOSE',
        value: 'HOSE',
        isSelected: true
      },
      {
        code: 'HNX',
        value: 'HNX',
        isSelected: false
      },
      {
        code: 'UPCOM',
        value: 'UPCOM',
        isSelected: false
      }
    ]
  };

  public static factors: Factor[] = [
    {
      title: 'Dữ liệu tài chính',
      code: 'FINANCE',
      dataItems: [
        {
          title: 'Doanh thu thuần',
          code: 'NET_REVENUE',
          max: 100000,
          min: 0,
          selectedValues: [0, 100000],
          isSelected: false,
          isShow: true,
          step: 100,
          unit: 'bil'
        },
        {
          title: 'Lợi nhuận gộp',
          code: 'GROSS_PROFIT',
          max: 20000,
          min: 0,
          selectedValues: [0, 20000],
          isSelected: false,
          isShow: true,
          step: 10,
          unit: 'bil'
        },
        {
          title: 'LNST',
          code: 'NET_INCOME',
          max: 10000,
          min: 0,
          selectedValues: [0, 10000],
          isSelected: false,
          isShow: true,
          step: 10,
          unit: 'bil'
        },
        {
          title: 'KL Cổ phiếu',
          code: 'SHARE_S_OUSTANDING',
          max: 5000,
          min: 0,
          selectedValues: [0, 5000],
          isSelected: false,
          isShow: true,
          step: 10,
          unit: 'mil'
        },
        {
          title: 'EPS',
          code: 'EPS',
          max: 50,
          min: 0,
          selectedValues: [0, 50],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'k'
        },
        {
          title: 'Giá trị sổ sách',
          code: 'BOOK_VALUE',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'k'
        },
        {
          title: 'Giá thị trường',
          code: 'MARKET_PRICE',
          max: 300,
          min: 0,
          selectedValues: [0, 300],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'k'
        },
        {
          title: 'Vốn hóa',
          code: 'MARKET_CAPITAL',
          max: 100000,
          min: 0,
          selectedValues: [0, 100000],
          isSelected: false,
          isShow: true,
          step: 100,
          unit: 'bil'
        }
      ]
    },
    {
      title: 'Tăng trưởng so với cùng kỳ',
      code: 'YOY_INCREASE',
      dataItems: [
        {
          title: 'TT Doanh thu',
          code: 'NET_REVENUE_YOY',
          max: 500,
          min: 0,
          selectedValues: [0, 500],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: '%'
        },
        {
          title: 'TT LNST',
          code: 'GROSS_PROFIT_YOY',
          max: 500,
          min: 0,
          selectedValues: [0, 500],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: '%'
        },
        {
          title: 'TT EPS',
          code: 'EPS_YOY',
          max: 500,
          min: 0,
          selectedValues: [0, 500],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: '%'
        },
        {
          title: 'TT EBITDA',
          code: 'EBITDA_YOY',
          max: 500,
          min: 0,
          selectedValues: [0, 500],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: '%'
        },
        {
          title: 'TT Nợ',
          code: 'DEBT_YOY',
          max: 500,
          min: 0,
          selectedValues: [0, 500],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: '%'
        },
        {
          title: 'TT VCSH',
          code: 'EQUITY_YOY',
          max: 500,
          min: 0,
          selectedValues: [0, 500],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: '%'
        },
        {
          title: 'TT Vốn hóa',
          code: 'MARKET_CAPITAL_YOY',
          max: 500,
          min: 0,
          selectedValues: [0, 500],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: '%'
        },
        {
          title: 'TT Tài sản',
          code: 'TOTAL_ASSETS_YOY',
          max: 500,
          min: 0,
          selectedValues: [0, 500],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: '%'
        }
      ]
    },
    {
      title: 'Tỷ số định giá',
      code: 'PRICE_RATIO',
      dataItems: [
        {
          title: 'P/E',
          code: 'P_E',
          max: 50,
          min: 0,
          selectedValues: [0, 50],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'x'
        },
        {
          title: 'Peg',
          code: 'PEG',
          max: 5,
          min: 0,
          selectedValues: [0, 5],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'P/B',
          code: 'P_B',
          max: 5,
          min: 0,
          selectedValues: [0, 5],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'P/S',
          code: 'P_S',
          max: 5,
          min: 0,
          selectedValues: [0, 5],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'EV/EBITDA',
          code: 'EV_EBITDA',
          max: 50,
          min: 0,
          selectedValues: [0, 50],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'x'
        },
        {
          title: 'EV/EBIT',
          code: 'EV_EBIT',
          max: 50,
          min: 0,
          selectedValues: [0, 50],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'x'
        },
        {
          title: 'EV/FCF',
          code: 'EV_FCF',
          max: 50,
          min: 0,
          selectedValues: [0, 50],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'x'
        },
        {
          title: 'Doanh thu/ Dòng tiền tự do',
          code: 'REV_FCF',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'Vốn hóa/ Dòng tiền HĐKD',
          code: 'MC_CFO',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'Vốn hóa/ Vốn lưu động',
          code: 'MC_NWC',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'x'
        }
      ]
    },
    {
      title: 'Hiệu quả đầu tư',
      code: 'PROFITABILITIES_RATIO',
      dataItems: [
        {
          title: 'Capex/Rev',
          code: 'CAPEX_REV',
          max: 50,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'x'
        },
        {
          title: 'ROIC',
          code: 'ROIC',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'x'
        },
        {
          title: 'ROCE',
          code: 'ROCE',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'x'
        },
        {
          title: 'ROE',
          code: 'ROE',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'x'
        },
        {
          title: 'ROA',
          code: 'ROA',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'x'
        }
      ]
    },
    {
      title: 'Margin',
      code: 'Lợi nhuận biên',
      dataItems: [
        {
          title: 'Tỷ lệ lãi gộp',
          code: 'GROSS_PROFIT_MARGIN',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'x'
        },
        {
          title: 'LN hoạt động biên',
          code: 'OPERATING_PROFIT_MARGIN',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'x'
        },
        {
          title: 'LN trước thuế biên',
          code: 'PRETAX_PROFIT_MARGIN',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'x'
        },
        {
          title: 'Tỷ lệ lãi ròng',
          code: 'NET_PROFIT_MARGIN',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'x'
        },
        {
          title: 'Tỷ suất cổ tức',
          code: 'DIV_YIELD',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'x'
        },
        {
          title: 'Tỷ suất EBIT',
          code: 'EBIT_REV',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'x'
        },
        {
          title: 'Tỷ suất EBITDA',
          code: 'EBITDA_REV',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'x'
        }
      ]
    },
    {
      title: 'Hiệu quả hoạt động',
      code: 'ACTIVITY_TURNOVER',
      dataItems: [
        {
          title: 'Vòng quay tài sản',
          code: 'SALES_TO_TOTAL_ASSETS',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'Vòng quay phải thu',
          code: 'RECEIVABLE_TURNOVER',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'Vòng quay phải trả',
          code: 'PAYABLE_TURNOVER',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'Vòng quay tồn kho',
          code: 'INVENTORY_TURNOVER',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'x'
        }
      ]
    },
    {
      title: 'Đòn bẩy tài chính',
      code: 'INTERPRETATION_OF_SOLVENCY_RATIOS',
      dataItems: [
        {
          title: 'Nợ/Tổng tài sản',
          code: 'DEBT_TO_ASSETS_RATIO',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'Nợ/Vốn chủ sở hữu',
          code: 'DEBT_TO_EQUITY_RATIO',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'Nợ dài hạn/Vốn hóa',
          code: 'LONG_TIME_DEBT_TOTAL_CAPITALAZION',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'Khả năng trả lãi vay',
          code: 'INTEREST_COVERAGE',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'x'
        }
      ]
    },
    {
      title: 'Hệ số thanh toán',
      code: 'LIQUIDITY_RATIO',
      dataItems: [
        {
          title: 'Hệ số thanh toán hiện hành',
          code: 'CURRENT_RATIO',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'Hệ số thanh toán nhanh',
          code: 'QUICK_RATIO',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'Hệ số thanh toán tiền mặt',
          code: 'CASH_RATIO',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'x'
        }
      ]
    },
    {
      title: 'Rủi ro',
      code: 'RISK_RATIO',
      dataItems: [
        {
          title: 'Phải thu/ Doanh thu',
          code: 'ACCOUNT_RECEIVABLE_TO_REVENUE',
          max: 5,
          min: 0,
          selectedValues: [0, 5],
          isSelected: false,
          isShow: true,
          step: 0.01,
          unit: 'x'
        },
        {
          title: 'Phải thu/ LNST',
          code: 'ACCOUNT_RECEIVABLE_TO_NET_INCOME',
          max: 5,
          min: 0,
          selectedValues: [0, 5],
          isSelected: false,
          isShow: true,
          step: 0.01,
          unit: 'x'
        },
        {
          title: 'Dự phòng/ LNST',
          code: 'ALLOWANCES_AND_PROVISIONS_TO_NET_INCOME',
          max: 5,
          min: 0,
          selectedValues: [0, 5],
          isSelected: false,
          isShow: true,
          step: 0.01,
          unit: 'x'
        }
      ]
    },
    {
      title: 'Đánh giá BCTC',
      code: 'SCORE',
      dataItems: [
        {
          title: 'F-Score (Chất lượng BCTC)',
          code: 'F_SCORE',
          max: 9,
          min: 0,
          selectedValues: [0, 9],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'Point'
        },
        {
          title: 'C-score (sửa đổi BCTC)',
          code: 'C_SCORE',
          max: 6,
          min: 0,
          selectedValues: [0, 6],
          isSelected: false,
          isShow: true,
          step: 1,
          unit: 'Point'
        },
        {
          title: 'M-score (Làm giả lợi nhuận)',
          code: 'M_SCORE',
          max: 10,
          min: -5,
          selectedValues: [-5, 10],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'Point'
        },
        {
          title: 'Z-score (khả năng phá sản)',
          code: 'Z_SCORE',
          max: 10,
          min: -4,
          selectedValues: [-4, 10],
          isSelected: false,
          isShow: true,
          step: 0.1,
          unit: 'Point'
        }
      ]
    }
  ];
}
