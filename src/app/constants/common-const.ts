import { Factor } from '../interface/factor';
import { PreFilter } from '../interface/pre-filter';

export class CommonConstants {
  public static preFilter: PreFilter =
    {
      filterTimes: [{
        code: 'quarter',
        value: "Qúy",
      },
      {
        code: 'year',
        value: "Năm",
      }],
      stockExchanges: [
        {
          code: 'HOSE',
          value: 'HOSE'
        },
        {
          code: 'HNX',
          value: 'HNX'
        },
        {
          code: 'UPCOM',
          value: 'UPCOM'
        }
      ]
    };
    
  public static factors: Factor[] = [
    {
      title: 'Finance',
      code: 'FINANCE',
      dataItems: [
        {
          title: 'Net Revenue',
          code: 'NET_REVENUE',
          max: 200000,
          min: 0,
          selectedValues: [0, 200000],
          isSelected: false,
          step: 100,
          unit: 'tỷ',
        },
        {
          title: 'Gross profit',
          code: 'GROSS_PROFIT',
          max: 50000,
          min: 0,
          selectedValues: [0, 50000],
          isSelected: false,
          step: 100,
          unit: 'tỷ'
        },
        {
          title: 'Net income',
          code: 'NET_INCOME',
          max: 20000,
          min: 10,
          selectedValues: [-1000, 20000],
          isSelected: false,
          step: 10,
          unit: 'tỷ'
        },
        {
          title: 'Share\'s outstanding',
          code: 'SHARE_S_OUSTANDING',
          max: 5000,
          min: 0,
          selectedValues: [0, 5000],
          isSelected: false,
          step: 10,
          unit: 'triệu'
        },
        {
          title: 'EPS',
          code: 'EPS',
          max: 50,
          min: 0,
          selectedValues: [0, 50],
          isSelected: false,
          step: 1,
          unit: 'nghìn'
        },
        {
          title: 'BV',
          code: 'BOOK_VALUE',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: 'nghìn'
        },
        {
          title: 'Price',
          code: 'MARKET_PRICE',
          max: 300,
          min: 0,
          selectedValues: [0, 300],
          isSelected: false,
          step: 1,
          unit: 'nghìn'
        },
        {
          title: 'Market capital',
          code: 'DAYYS',
          max: 600000,
          min: 0,
          selectedValues: [0, 600000],
          isSelected: false,
          step: 100,
          unit: 'tỷ'
        }
      ]
    },
    {
      title: '%YOY increase',
      code: 'YOY_INCREASE',
      dataItems: [
        {
          title: 'Net revenue (%YOY)',
          code: 'CAPEX',
          max: 2000,
          min: 0,
          selectedValues: [0, 2000],
          isSelected: false,
          step: 10,
          unit: '%'
        },
        {
          title: 'Gross profit (%YOY)',
          code: 'GROSS_PROFIT_YOY',
          max: 2000,
          min: 0,
          selectedValues: [0, 2000],
          isSelected: false,
          step: 10,
          unit: '%'
        },
        {
          title: 'EPS (%YOY)',
          code: 'EPS_YOY',
          max: 2000,
          min: 0,
          selectedValues: [0, 2000],
          isSelected: false,
          step: 10,
          unit: '%'
        },
        {
          title: 'EBITDA (%YOY)',
          code: 'EBITDA_YOY',
          max: 2000,
          min: 0,
          selectedValues: [0, 2000],
          isSelected: false,
          step: 10,
          unit: '%'
        },
        {
          title: 'Debt (%YOY)',
          code: 'DEBT_YOY',
          max: 2000,
          min: 0,
          selectedValues: [0, 2000],
          isSelected: false,
          step: 10,
          unit: '%'
        },
        {
          title: 'Equity (%YOY)',
          code: 'EQUITY_YOY',
          max: 2000,
          min: 0,
          selectedValues: [0, 2000],
          isSelected: false,
          step: 10,
          unit: '%'
        },
        {
          title: 'Market capital (%YOY)',
          code: 'MARKET_CAPITAL_YOY',
          max: 2000,
          min: 0,
          selectedValues: [0, 2000],
          isSelected: false,
          step: 10,
          unit: '%'
        },
        {
          title: 'Total assets (%YOY)',
          code: 'TOTAL_ASSETS_YOY',
          max: 2000,
          min: 0,
          selectedValues: [0, 2000],
          isSelected: false,
          step: 10,
          unit: '%'
        }
      ]
    },
    {
      title: 'Price ratio',
      code: 'PRICE_RATIO',
      dataItems: [
        {
          title: 'P/E',
          code: 'PE',
          max: 50,
          min: 0,
          selectedValues: [0, 50],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'Peg',
          code: 'PEG',
          max: 50,
          min: 0,
          selectedValues: [0, 50],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'P/B',
          code: 'PB',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'P/S',
          code: 'PS',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'EV/EBITDA',
          code: 'EV_EBITDA',
          max: 50,
          min: 0,
          selectedValues: [0, 50],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'EV/EBIT',
          code: 'EV_EBIT',
          max: 50,
          min: 0,
          selectedValues: [0, 50],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'EV/FCF',
          code: 'EV_FCF',
          max: 50,
          min: 0,
          selectedValues: [0, 50],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'Rev/FCF',
          code: 'REV_FCF',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'MC/CFO',
          code: 'MC_CFO',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'MC/NWC',
          code: 'MC_NWC',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 1,
          unit: ''
        }
      ]
    },
    {
      title: 'Profitabilities ratio',
      code: 'PROFITABILITIES_RATIO',
      dataItems: [
        {
          title: 'Capex/Rev',
          code: 'CAPEX_REV',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'ROIC',
          code: 'ROIC',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'ROCE',
          code: 'ROCE',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'ROE',
          code: 'ROE',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'ROA',
          code: 'ROA',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: ''
        }
      ]
    },
    {
      title: 'Margin',
      code: 'MARGIN',
      dataItems: [
        {
          title: 'Gross profit margin',
          code: 'GROSS_PROFIT_MARGIN',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'Operating profit Margin',
          code: 'OPERATING_PROFIT_MARGIN',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'Pretax profit Margin',
          code: 'PRETAX_PROFIT_MARGIN',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'Net profit margin',
          code: 'NET_PROFIT_MARGIN',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'Div Yield',
          code: 'DIV_YIELD',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'EBIT/REV',
          code: 'EBIT_REV',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'EBITDA/REV',
          code: 'EBITDA_REV',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: ''
        }
      ]
    },
    {
      title: 'Activity turnover',
      code: 'ACTIVITY_TURNOVER',
      dataItems: [
        {
          title: 'sales-to-total assets',
          code: 'SALES_TO_TOTAL_ASSETS',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'Receivable turnover',
          code: 'RECEIVABLE_TURNOVER',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'Payable turnover',
          code: 'PAYABLE_TURNOVER',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'inventory turnover',
          code: 'INVENTORY_TURNOVER',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 1,
          unit: ''
        }
      ]
    },
    {
      title: 'Interpretation of Solvency ratios',
      code: 'INTERPRETATION_OF_SOLVENCY_RATIOS',
      dataItems: [
        {
          title: 'debt-to-assets ratio',
          code: 'DEBT_TO_ASSETS_RATIO',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'Debt-to-equity ratio',
          code: 'DEBT_TO_EQUITY_RATIO',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'Long-time debt/total capitalazion',
          code: 'LONG_TIME_DEBT_TOTAL_CAPITALAZION',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 1,
          unit: ''
        },
        {
          title: 'interest coverage',
          code: 'INTEREST_COVERAGE',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 1,
          unit: ''
        }
      ]
    },
    {
      title: 'Liquidity Ratio',
      code: 'LIQUIDITY_RATIO',
      dataItems: [
        {
          title: 'Current ratio',
          code: 'CURRENT_RATIO',
          max: 3,
          min: 0,
          selectedValues: [0, 3],
          isSelected: false,
          step: 0.1,
          unit: ''
        },
        {
          title: 'Quick ratio',
          code: 'QUICK_RATIO',
          max: 3,
          min: 0,
          selectedValues: [0, 3],
          isSelected: false,
          step: 0.1,
          unit: ''
        },
        {
          title: 'Cash ratio',
          code: 'CASH_RATIO',
          max: 3,
          min: 0,
          selectedValues: [0, 3],
          isSelected: false,
          step: 0.1,
          unit: ''
        }
      ]
    },
    {
      title: 'Risk ratio',
      code: 'RISK_RATIO',
      dataItems: [
        {
          title: 'Account receivable-to-revenue',
          code: 'ACCOUNT_RECEIVABLE_TO_REVENUE',
          max: 2,
          min: 0,
          selectedValues: [0, 2],
          isSelected: false,
          step: 0.01,
          unit: ''
        },
        {
          title: 'Account receivable-to-net income',
          code: 'ACCOUNT_RECEIVABLE_TO_NET_INCOME',
          max: 5,
          min: 0,
          selectedValues: [0, 5],
          isSelected: false,
          step: 0.01,
          unit: ''
        },
        {
          title: 'Allowances and provisions-to-net income',
          code: 'ALLOWANCES_AND_PROVISION_TO_NET_INCOME',
          max: 5,
          min: 0,
          selectedValues: [0, 5],
          isSelected: false,
          step: 0.01,
          unit: ''
        }
      ]
    },
    {
      title: 'Score',
      code: 'SCORE',
      dataItems: [
        {
          title: 'F-Score',
          code: 'F_SCORE',
          max: 9,
          min: 0,
          selectedValues: [0, 9],
          isSelected: false,
          step: 0.1,
          unit: ''
        },
        {
          title: 'C-score',
          code: 'C_SCORE',
          max: 6,
          min: 0,
          selectedValues: [0, 6],
          isSelected: false,
          step: 0.1,
          unit: ''
        },
        {
          title: 'M-score',
          code: 'M_SCORE',
          max: 10,
          min: 5,
          selectedValues: [5, 10],
          isSelected: false,
          step: 0.1,
          unit: ''
        },
        {
          title: 'Z-score',
          code: 'Z_SCORE',
          max: 10,
          min: 4,
          selectedValues: [4, 10],
          isSelected: false,
          step: 0.1,
          unit: ''
        }
      ]
    }
  ];
}