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
          title: 'Revenue',
          code: 'NET_REVENUE',
          max: 100000,
          min: 0,
          selectedValues: [0, 100000],
          isSelected: false,
          step: 100,
          unit: 'bil',
        },
        {
          title: 'Gross profit',
          code: 'GROSS_PROFIT',
          max: 20000,
          min: 0,
          selectedValues: [0, 20000],
          isSelected: false,
          step: 10,
          unit: 'bil'
        },
        {
          title: 'Income',
          code: 'NET_INCOME',
          max: 10000,
          min: 0,
          selectedValues: [0, 10000],
          isSelected: false,
          step: 10,
          unit: 'bil'
        },
        {
          title: 'Share\'s outstanding',
          code: 'SHARE_S_OUSTANDING',
          max: 5000,
          min: 0,
          selectedValues: [0, 5000],
          isSelected: false,
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
          step: 1,
          unit: 'k'
        },
        {
          title: 'BV',
          code: 'BOOK_VALUE',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: 'k'
        },
        {
          title: 'Price',
          code: 'MARKET_PRICE',
          max: 300,
          min: 0,
          selectedValues: [0, 300],
          isSelected: false,
          step: 1,
          unit: 'k'
        },
        {
          title: 'Capitalization',
          code: 'MARKET_CAPITAL',
          max: 100000,
          min: 0,
          selectedValues: [0, 100000],
          isSelected: false,
          step: 100,
          unit: 'bil'
        }
      ]
    },
    {
      title: '%YOY increase',
      code: 'YOY_INCREASE',
      dataItems: [
        {
          title: 'Revenue(%YOY)',
          code: 'NET_REVENUE_YOY',
          max: 500,
          min: 0,
          selectedValues: [0, 500],
          isSelected: false,
          step: 1,
          unit: '%'
        },
        {
          title: 'Gross profit(%YOY)',
          code: 'GROSS_PROFIT_YOY',
          max: 500,
          min: 0,
          selectedValues: [0, 500],
          isSelected: false,
          step: 1,
          unit: '%'
        },
        {
          title: 'EPS(%YOY)',
          code: 'EPS_YOY',
          max: 500,
          min: 0,
          selectedValues: [0, 500],
          isSelected: false,
          step: 1,
          unit: '%'
        },
        {
          title: 'EBITDA(%YOY)',
          code: 'EBITDA_YOY',
          max: 500,
          min: 0,
          selectedValues: [0, 500],
          isSelected: false,
          step: 1,
          unit: '%'
        },
        {
          title: 'Debt(%YOY)',
          code: 'DEBT_YOY',
          max: 500,
          min: 0,
          selectedValues: [0, 500],
          isSelected: false,
          step: 1,
          unit: '%'
        },
        {
          title: 'Equity(%YOY)',
          code: 'EQUITY_YOY',
          max: 500,
          min: 0,
          selectedValues: [0, 500],
          isSelected: false,
          step: 1,
          unit: '%'
        },
        {
          title: 'Capitalization(%YOY)',
          code: 'MARKET_CAPITAL_YOY',
          max: 500,
          min: 0,
          selectedValues: [0, 500],
          isSelected: false,
          step: 1,
          unit: '%'
        },
        {
          title: 'Assets(%YOY)',
          code: 'TOTAL_ASSETS_YOY',
          max: 500,
          min: 0,
          selectedValues: [0, 500],
          isSelected: false,
          step: 1,
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
          code: 'P_E',
          max: 50,
          min: 0,
          selectedValues: [0, 50],
          isSelected: false,
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
          step: 1,
          unit: 'x'
        },
        {
          title: 'Rev/FCF',
          code: 'REV_FCF',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'MC/CFO',
          code: 'MC_CFO',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'MC/NWC',
          code: 'MC_NWC',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 0.1,
          unit: 'x'
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
          max: 50,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
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
          step: 1,
          unit: 'x'
        }
      ]
    },
    {
      title: 'Margin',
      code: 'MARGIN',
      dataItems: [
        {
          title: 'Gross margin',
          code: 'GROSS_PROFIT_MARGIN',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: 'x'
        },
        {
          title: 'Operating Margin',
          code: 'OPERATING_PROFIT_MARGIN',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: 'x'
        },
        {
          title: 'Pretax Margin',
          code: 'PRETAX_PROFIT_MARGIN',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: 'x'
        },
        {
          title: 'Profit margin',
          code: 'NET_PROFIT_MARGIN',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: 'x'
        },
        {
          title: 'Div Yield',
          code: 'DIV_YIELD',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: 'x'
        },
        {
          title: 'EBIT/REV',
          code: 'EBIT_REV',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: 'x'
        },
        {
          title: 'EBITDA/REV',
          code: 'EBITDA_REV',
          max: 100,
          min: 0,
          selectedValues: [0, 100],
          isSelected: false,
          step: 1,
          unit: 'x'
        }
      ]
    },
    {
      title: 'Activity turnover',
      code: 'ACTIVITY_TURNOVER',
      dataItems: [
        {
          title: 'Asset Turnover',
          code: 'SALES_TO_TOTAL_ASSETS',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'Receivable turnover',
          code: 'RECEIVABLE_TURNOVER',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'Payable turnover',
          code: 'PAYABLE_TURNOVER',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'inventory turnover',
          code: 'INVENTORY_TURNOVER',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 0.1,
          unit: 'x'
        }
      ]
    },
    {
      title: 'Interpretation of Solvency ratios',
      code: 'INTERPRETATION_OF_SOLVENCY_RATIOS',
      dataItems: [
        {
          title: 'debt-to-assets',
          code: 'DEBT_TO_ASSETS_RATIO',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'Debt-to-equity',
          code: 'DEBT_TO_EQUITY_RATIO',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'LT-debt/capitalazion',
          code: 'LONG_TIME_DEBT_TOTAL_CAPITALAZION',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'interest coverage',
          code: 'INTEREST_COVERAGE',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 0.1,
          unit: 'x'
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
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'Quick ratio',
          code: 'QUICK_RATIO',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'Cash ratio',
          code: 'CASH_RATIO',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,
          step: 0.1,
          unit: 'x'
        }
      ]
    },
    {
      title: 'Risk ratio',
      code: 'RISK_RATIO',
      dataItems: [
        {
          title: 'AR/Rev',
          code: 'ACCOUNT_RECEIVABLE_TO_REVENUE',
          max: 5,
          min: 0,
          selectedValues: [0, 5],
          isSelected: false,
          step: 0.01,
          unit: 'x'
        },
        {
          title: 'AR/Income',
          code: 'ACCOUNT_RECEIVABLE_TO_NET_INCOME',
          max: 5,
          min: 0,
          selectedValues: [0, 5],
          isSelected: false,
          step: 0.01,
          unit: 'x'
        },
        {
          title: 'A&P/Income',
          code: 'ALLOWANCES_AND_PROVISIONS_TO_NET_INCOME',
          max: 5,
          min: 0,
          selectedValues: [0, 5],
          isSelected: false,
          step: 0.01,
          unit: 'x'
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
          step: 1,
          unit: 'Point'
        },
        {
          title: 'C-score',
          code: 'C_SCORE',
          max: 6,
          min: 0,
          selectedValues: [0, 6],
          isSelected: false,
          step: 1,
          unit: 'Point'
        },
        {
          title: 'M-score',
          code: 'M_SCORE',
          max: 10,
          min: -5,
          selectedValues: [-5, 10],
          isSelected: false,
          step: 0.1,
          unit: 'Point'
        },
        {
          title: 'Z-score',
          code: 'Z_SCORE',
          max: 10,
          min: -4,
          selectedValues: [-4, 10],
          isSelected: false,
          step: 0.1,
          unit: 'Point'
        }
      ]
    }
  ];
}