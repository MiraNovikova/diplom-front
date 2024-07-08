import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, switchMap, withLatestFrom } from 'rxjs';
import { UserService } from '../user/user.service';
import { TreeNode } from 'primeng/api';
import { OrderType } from '../../../shared/orders';

@Injectable({
  providedIn: 'root'
})
export class BookOrderService {

  private groupOrders = new BehaviorSubject(false);
  readonly groupOrders$ = this.groupOrders.asObservable()

  constructor(private http: HttpClient,
    private userService : UserService
  ) { }

 getOrders(): Observable<TreeNode<OrderType[]>[]> {
  const userId = this.userService.getUser()?.id;
  return this.http.get<OrderType[]>('http://localhost:3000/order/' + userId).pipe(    // {params: {userId}}
    withLatestFrom(this.groupOrders$),
      switchMap(([orders, group]) => {
        //console.log('group', group)
        return of(orders).pipe(
          map((data) => {
            if (group) {
              return [this.groupData(data, 'bookName')];
            } else {
              return [this.transformOrderData(data)]
            }
          }));
      }
    )
  )
}
  groupData(data: OrderType[], arg1: string): any {
    throw new Error('Method not implemented.');
  }

  transformOrderData(data: OrderType[]): TreeNode<OrderType[]> {
    const treeNodeObj: TreeNode = {
      children: [],
      data: {
        name: ' '
      },
      expanded: true
    }

    if (Array.isArray(data))
       {
      data.forEach((el: OrderType) => {
        const dataObj = {
          data: el
        }
        treeNodeObj.children?.push(dataObj);
      });
    } else  {
      return <TreeNode<OrderType[]>>[]
    } 
    console.log('treeNodeObj', treeNodeObj)
    return treeNodeObj;
  }
}
