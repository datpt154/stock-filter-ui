import { Factor } from '../interface/factor';

export class CommonConstants {
  public static otherFactors =
    {
      filterTimes: [{
        code: 'quarter',
        value: "Quý",
        isSelected: false
      },
      {
        code: 'year',
        value: "Năm",
        isSelected: false
      }],
      stockExchanges: [
        {
          code: 'HOSE',
          value: 'HOSE',
          isSelected: false
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
          isShow: true,
          step: 100,
          unit: 'bil',
        },
        {
          title: 'Gross Profit',
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
          title: 'Income',
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
          title: 'Share\'s Outstanding',
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
          title: 'BV',
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
          title: 'Price',
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
          title: 'Capitalization',
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
      title: 'Finance Growth',
      code: 'YOY_INCREASE',
      dataItems: [
        {
          title: 'Revenue Growth',
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
          title: 'Gross Profit Growth',
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
          title: 'EPS Growth',
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
          title: 'EBITDA Growth',
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
          title: 'Debt Growth',
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
          title: 'Equity Growth',
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
          title: 'Capitalization Growth',
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
          title: 'Assets Growth',
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
      title: 'Price Ratio',
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
          title: 'Rev/FCF',
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
          title: 'MC/CFO',
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
          title: 'MC/NWC',
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
      title: 'Profitabilities Ratio',
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
      code: 'MARGIN',
      dataItems: [
        {
          title: 'Gross Margin',
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
          title: 'Operating Margin',
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
          title: 'Pretax Margin',
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
          title: 'Profit Margin',
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
          title: 'Div Yield',
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
          title: 'EBIT/REV',
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
          title: 'EBITDA/REV',
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
      title: 'Activity Turnover',
      code: 'ACTIVITY_TURNOVER',
      dataItems: [
        {
          title: 'Asset Turnover',
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
          title: 'Receivable Turnover',
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
          title: 'Payable Turnover',
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
          title: 'Inventory Turnover',
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
      title: 'Interpretation of Solvency Ratios',
      code: 'INTERPRETATION_OF_SOLVENCY_RATIOS',
      dataItems: [
        {
          title: 'Debt-to-assets',
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
          title: 'Debt-to-equity',
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
          title: 'LT-debt/capitalazion',
          code: 'LONG_TIME_DEBT_TOTAL_CAPITALAZION',
          max: 10,
          min: 0,
          selectedValues: [0, 10],
          isSelected: false,isShow: true,
          step: 0.1,
          unit: 'x'
        },
        {
          title: 'Interest Coverage',
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
      title: 'Liquidity Ratio',
      code: 'LIQUIDITY_RATIO',
      dataItems: [
        {
          title: 'Current Ratio',
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
          title: 'Quick Ratio',
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
          title: 'Cash Ratio',
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
      title: 'Risk Ratio',
      code: 'RISK_RATIO',
      dataItems: [
        {
          title: 'AR/Rev',
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
          title: 'AR/Income',
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
          title: 'A&P/Income',
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
          isShow: true,
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
          isShow: true,
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
          isShow: true,
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
          isShow: true,
          step: 0.1,
          unit: 'Point'
        }
      ]
    }
  ];
}