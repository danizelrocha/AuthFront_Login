import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = 'http://locaçhost:3000';

  constructor(
    private http: HttpClient
  ) {}

  public sing(payload: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.url}/sign`, payload).pipe(
      map((res) => {
        return console.log(res)
      }),
      catchError((e) => {
        if(e.error.message) return throwError(() => e.error.message);

        return throwError(() => " No momento não estamos conseguindo validar estes dados, tente novamente mais tarde!");
      })
    );
  }
}
