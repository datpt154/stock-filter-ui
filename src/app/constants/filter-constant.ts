import {Factor} from '../interface/factor';

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
          title: '',
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

  /*[
  - any => khong truyen len
  - range co 2 loai:
     . 1-5
     . >100, <10
  -
PTCB: [
{
  code: NET_REVENUE,
  range: '>100'
},
{
  code: NET_REVENUE,
  range: '>100'
}
]
  ] */

  public static factors_ptcb: any[] = [
    {
      title: 'Doanh thu thuần',
      code: 'NET_REVENUE',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>100 ti', '>500 ti', '>1000', '>5000', '>10000']
    },
    {
      title: 'Lợi nhuận ròng',
      code: 'NET_INCOME',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>100', '>500', '>1000', '>5000', '>10000']
    },
    {
      title: 'EPS',
      code: 'EPS',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>1', '>2', '>5', '>10', '>20']
    },
    {
      title: 'Giá trị sổ sách',
      code: 'BOOK_VALUE',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '15', '20', '>25']
    },
    {
      title: 'Giá thị trường',
      code: 'MARKET_PRICE',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>20', '>50', '>100']
    },
    {
      title: 'Vốn hóa',
      code: 'MARKET_CAPITAL',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>500', '>1000', '>5000', '>10000', '>50000']
    },
    {
      title: 'Doanh thu thuần (YOY)',
      code: 'NET_REVENUE_YOY',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>15', '>20', '>25']
    },
    {
      title: 'Lợi nhuận ròng (YOY)',
      code: 'GROSS_PROFIT_YOY',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>15', '>20', '>25']
    },
    {
      title: 'EPS (YOY)',
      code: 'EPS_YOY',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>15', '>20', '>25']
    },
    {
      title: 'EBITDA (YOY)',
      code: 'EBITDA_YOY',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>15', '>20', '>25']
    },
    {
      title: 'Nợ (YOY)',
      code: 'DEBT_YOY',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>15', '>20', '>25']
    },
    {
      title: 'VCSH (YOY)',
      code: 'EQUITY_YOY',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>15', '>20', '>25']
    },
    {
      title: 'Vốn hoá (YOY)',
      code: 'MARKET_CAPITAL_YOY',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>15', '>20', '>25']
    },
    {
      title: 'Tài sản (YOY)',
      code: 'TOTAL_ASSETS_YOY',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>15', '>20', '>25']
    },
    {
      title: 'P/E',
      code: 'P_E',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>8', '>10', '>15', '>20']
    },
    {
      title: 'Peg',
      code: 'PEG',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>0.1', '>0.2', '>0.3', '>0.5', '>1.0']
    },
    {
      title: 'P/B',
      code: 'P_B',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>0.5', '>1', '>1.5', '>2', '>3']
    },
    {
      title: 'P/S',
      code: 'P_S',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>0.5', '>1', '>1.5', '>2', '>3']
    },
    {
      title: 'EV/EBITDA',
      code: 'EV_EBITDA',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>8', '>10', '>15', '>20']
    },
    {
      title: 'EV/EBIT',
      code: 'EV_EBIT',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>8', '>10', '>15', '>20']
    },
    {
      title: 'EV/FCF',
      code: 'EV_FCF',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>8', '>10', '>15', '>20']
    },
    {
      title: 'REV/FCF',
      code: 'REV_FCF',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>8', '>10', '>15', '>20']
    },
    {
      title: 'MC/CFO',
      code: 'MC_CFO',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>8', '>10', '>15', '>20']
    },
    {
      title: 'MC/NWC',
      code: 'MC_NWC',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>8', '>10', '>15', '>20']
    },
    {
      title: 'Capex/Rev',
      code: 'CAPEX_REV',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>1', '>2', '>3', '>5', '>10']
    },
    {
      title: 'ROIC',
      code: 'ROIC',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>15', '>20', '>25']
    },
    {
      title: 'ROCE',
      code: 'ROCE',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>15', '>20', '>25']
    },
    {
      title: 'ROE',
      code: 'ROE',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>15', '>20', '>25']
    },
    {
      title: 'ROA',
      code: 'ROA',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>1', '>2', '>3', '>5', '>10']
    },
    {
      title: 'Biên lợi nhuận gộp',
      code: 'GROSS_PROFIT_MARGIN',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>15', '>20', '>25']
    },
    {
      title: 'LN hoạt động biên',
      code: 'OPERATING_PROFIT_MARGIN',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>15', '>20', '>25']
    },
    {
      title: 'LN trước thuế',
      code: 'PRETAX_PROFIT_MARGIN',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>15', '>20', '>25']
    },
    {
      title: 'Biên lãi ròng',
      code: 'NET_PROFIT_MARGIN',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>15', '>20', '>25']
    },
    {
      title: 'Tỷ suất cổ tức',
      code: 'DIV_YIELD',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>1', '>2', '>3', '>5', '>10']
    },
    {
      title: 'Tỷ suất EBIT',
      code: 'EBIT_REV',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>15', '>20', '>25']
    },
    {
      title: 'Tỷ suất EBITDA',
      code: 'EBITDA_REV',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>5', '>10', '>15', '>20', '>25']
    }
  ];

  public static factors_ptkt: any[] = [
    {
      title: 'Giá trị giao dich',
      code: '1',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>0.5 tỷ', '0.5-1 tỷ', '1-5 tỷ', '5-10 tỷ', '>10 tỷ']
    },
    {
      title: 'Relative strength',
      code: '2',
      isSelected: false,
      isShow: true,
      ranges: ['any', '>50%', '>60%', '>70%', '>80%', '>90%']
    },
    {
      title: 'RSI(14)',
      code: '3',
      isSelected: false,
      isShow: true,
      ranges: ['any', '<20', '20-30', '30-50', '50-70', '70-80', '>80']
    },
    {
      title: 'Volume',
      code: '4',
      isSelected: false,
      isShow: true,
      ranges: ['any', '<50k', '50-100k', '100-500k', '500-1000k', '>1000k']
    },
    {
      title: 'Volume/Trung bình Volume(20)',
      code: '5',
      isSelected: false,
      isShow: true,
      ranges: ['any', '<10%', '10-20%', '20-50%', '50-100%', '>100%']
    },
    {
      title: '52WH',
      code: '6',
      isSelected: false,
      isShow: true,
      ranges: ['any', '<10%', '10-20%', '20-30%', '30-40%', '40-50%', '>50%']
    },
    {
      title: '52WL',
      code: '7',
      isSelected: false,
      isShow: true,
      ranges: ['any', '<10%', '10-20%', '20-50%', '50-100%', '>100%']
    },
    {
      title: 'ADX(14)',
      code: '8',
      isSelected: false,
      isShow: true,
      ranges: ['any', '<10', '10-20', '20-30', '30-40', '>40']
    },
    {
      title: 'Stochastic',
      code: '9',
      isSelected: false,
      isShow: true,
      ranges: ['any', '<20', '20-30', '30-50', '50-70', '70-80', '>80']
    },
    {
      title: 'Price & MA10',
      code: '10',
      isSelected: false,
      isShow: true,
      ranges: ['any', '< -20%', '-20% to -10%', '-10% to 0', '10-20%', '>20%']
    },
    {
      title: 'Price & MA20',
      code: '11',
      isSelected: false,
      isShow: true,
      ranges: ['any', '< -20%', '-20% to -10%', '-10% to 0', '10-20%', '>20%']
    },
    {
      title: 'Price & MA50',
      code: '12',
      isSelected: false,
      isShow: true,
      ranges: ['any', '< -20%', '-20% to -10%', '-10% to 0', '10-20%', '>20%']
    },
    {
      title: 'Price & MA200',
      code: '13',
      isSelected: false,
      isShow: true,
      ranges: ['any', '< -20%', '-20% to -10%', '-10% to 0', '10-20%', '>20%']
    },
    {
      title: 'MA10 & MA20',
      code: '14',
      isSelected: false,
      isShow: true,
      ranges: ['any', '< -20%', '-20% to -10%', '-10% to 0', '10-20%', '>20%']
    },
    {
      title: 'MA20 & MA50',
      code: '15',
      isSelected: false,
      isShow: true,
      ranges: ['any', '< -20%', '-20% to -10%', '-10% to 0', '10-20%', '>20%']
    },
    {
      title: 'MA50 & MA200',
      code: '16',
      isSelected: false,
      isShow: true,
      ranges: ['any', '< -20%', '-20% to -10%', '-10% to 0', '10-20%', '>20%']
    },
  ];
}


