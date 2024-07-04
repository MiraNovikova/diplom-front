import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { OrderType } from '../../shared/orders';
import { HttpClient } from '@angular/common/http';
import { BookOrderService } from '../service/book-order/book-order.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  
  tableData$: Observable<TreeNode<OrderType[]>[]>;
  tableData: TreeNode<OrderType[]>[] = [];

  private _destroyer: Subscription;

  constructor(private bookOrderService: BookOrderService,
    private http: HttpClient) { }

  ngOnInit(): void {

    this.initOrders();

    this._destroyer = this.bookOrderService.groupOrders$.subscribe((data: boolean) => {
      this.initOrders()
   })
  
  }

  ngOnDestroy(): void {
    this._destroyer.unsubscribe()
  }

  initOrders(): void {
   this.tableData$ = this.bookOrderService.getOrders()
  }

}
