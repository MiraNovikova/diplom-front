import { Injectable } from '@angular/core';
import { IConfig } from '../../../interface/confg';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  static config: IConfig;

  // обработка ошибок запроса в ConfigService
  configUrl:'../../../config.json';
 

  constructor(private http: HttpClient) { }

  configLoad (): void {
    const jsonFile = `assets/config/config.json`;
    this.http.get<IConfig>(jsonFile).subscribe((data) => {
      if (data && typeof(data) === 'object') {
        ConfigService.config = data;
 
      }
    })
 
  }

  loadPromise() {
    const jsonFile = `assets/config/config.json`;
    const configPromise =  new Promise<IConfig>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response: any ) => {
        if (response && typeof(response) === 'object') {
          ConfigService.config = response;
          const config = ConfigService.config;
          if (config) {
            // set origin host
            resolve(config);
          } else {
            reject('Ошибка при инициализации конфига - неверный формат '+config);
          }
        } else {
          reject('Ошибка при инициализации конфига - неверный формат ответа '+ response);
        }
      }).catch((response: any) => {
        reject(`Ошибка при загрузки файла '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
 
    const promiseArr = [configPromise];
    return Promise.all(promiseArr);
}

private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    console.error('An error occurred:', error.error);
  } else {
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  return throwError(() => new Error('Something bad happened; please try again later.'));
}


getConfig() {
  return this.http.get<IConfig>(this.configUrl)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
}

}
