import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../../services/business.service/filter.service';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { QuickGeneralTableConstants } from '../../../constants/quick-general-table-const';
import { IQuickGeneralTableHeader, IQuickGeneralTableData } from '../../../interface/quick-general-table-dto';

@Component({
  selector: 'app-quick-general',
  templateUrl: './quick-general.component.html',
  styleUrls: ['./quick-general.component.css']
})
export class QuickGeneralComponent implements OnInit {
  revenueTabId = 'revenueTabId';
  profitTabId = 'profitTabId';
  epsTabId = 'epsTabId';
  pePBTabId = 'pePBTabId';
  mcNWCTabId = 'mcNWCTabId';

  constructor(private _filterService: FilterService) {}

  headerTable1: IQuickGeneralTableHeader;
  headerTable2: IQuickGeneralTableHeader;
  tableDataTab: IQuickGeneralTableData;

  ngOnInit() {
    // load data for RevenueTab by default
    this.loadDataForRevenueTab();
  }

  tabChange(tabObj: NgbTabChangeEvent): void {
    switch (tabObj.nextId) {
      case this.revenueTabId:
        this.loadDataForRevenueTab();
        break;
      case this.profitTabId:
        this.loadDataForProfitTab();
        break;
      case this.epsTabId:
        this.loadDataForEPSTab();
        break;
      case this.pePBTabId:
        this.loadDataForPePbTab();
        break;
      case this.mcNWCTabId:
        this.loadDataForMcNwcTab();
        break;
    }
  }

  loadDataForRevenueTab(): void {
    this._filterService.getScreenRevenue().subscribe(data => {
      this.tableDataTab = data;
      this.headerTable1 = QuickGeneralTableConstants.revenueHeaderTab;
      this.headerTable2 = QuickGeneralTableConstants.highestRevenueHeaderTab;
    });
  }

  loadDataForProfitTab(): void {
    this._filterService.getScreenProfit().subscribe(data => {
      this.tableDataTab = data;
      this.headerTable1 = QuickGeneralTableConstants.profitHeaderTab;
      this.headerTable2 = QuickGeneralTableConstants.highestProfitHeaderTab;
    });
  }

  loadDataForEPSTab(): void {
    this._filterService.getScreenEPS().subscribe(data => {
      this.tableDataTab = data;
      this.headerTable1 = QuickGeneralTableConstants.epsHeaderTab;
      this.headerTable2 = QuickGeneralTableConstants.highestEPSHeaderTab;
    });
  }

  loadDataForPePbTab(): void {
    this._filterService.getScreenPE_PB().subscribe(data => {
      this.tableDataTab = data;
      this.headerTable1 = QuickGeneralTableConstants.pePbHeaderTab;
      this.headerTable2 = QuickGeneralTableConstants.lowestPePbHeaderTab;
    });
  }

  loadDataForMcNwcTab(): void {
    this._filterService.getScreenMCNWC_EVEBITDA().subscribe(data => {
      this.tableDataTab = data;
      this.headerTable1 = QuickGeneralTableConstants.mcNwcHeaderTab;
      this.headerTable2 = QuickGeneralTableConstants.lowestMcNwcHeaderTab;
    });
  }
}
