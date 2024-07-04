import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestInterceptorService {

  constructor(private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const hasToken = this.userService.getToken();
    //console.log('hasToken', hasToken)


    if(hasToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization',
          'Bearer ' + hasToken
        )
      });
      return next.handle(cloned)
    } else {
      return next.handle(req)
    }
    
  } 
}
