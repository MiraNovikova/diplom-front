import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, switchMap, withLatestFrom } from 'rxjs';
import { UserService } from '../user/user.service';
import { TreeNode } from 'primeng/api';
import { OrderPropsType, OrderType } from 'src/app/shared/orders';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
/*
  private groupOrders = new BehaviorSubject(false);
  readonly groupOrders$ = this.groupOrders.asObservable()

  constructor(private http: HttpClient,
    private userService : UserService) { }

 getOrders(): Observable<TreeNode<OrderType[]>[]> {
  const userId = this.userService.getUser()?.id;
    return this.http.get<OrderType[]>('http://localhost:3000/order/', {params: {userId}}).pipe(
      withLatestFrom(this.groupOrders$),
      switchMap(([orders, group]) => {
        //console.log('group', group)
        return of(orders).pipe(
          map((data) => {
            if (group) {
              return [this.groupData(data, 'titleName')];
            } 
          }));
      }
    )
  )
}

initGroupOrders(val: boolean) : void {
  this.groupOrders.next(val);
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

groupData(data: OrderType[], prop: OrderPropsType): TreeNode<OrderType[]> {
  const treeNodeObj: TreeNode = {
      children: [],
      data: {
        name: 'Заказы'
      },
      expanded: true
  }
  if (Array.isArray(data)) {
    data.reduce((acc: TreeNode<any>, el: OrderType, index: number) => {
      const targetItem = acc.children.find((treeEl) => treeEl.data[prop] === el[prop]);
      if (targetItem) {
        const newTreeNode: TreeNode = {
          data: el,
          expanded: false,
          children: []
        }
        targetItem.children.push(newTreeNode);
      } 
      else {
        const newTreeNode: TreeNode = {
          data: el,
          expanded: false,
          children: []
        }
        acc.children.push(newTreeNode)
      }
      return treeNodeObj;
    }, treeNodeObj);
    console.log('treeNodeObj', treeNodeObj)
    return treeNodeObj;
  } else {
    return <TreeNode<OrderType[]>>[];
  }

}*/

}
