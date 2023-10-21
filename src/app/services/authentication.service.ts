import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators'

import { User } from 'src/shared/helpers'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userSubject : BehaviorSubject <User | null>;
  public user: Observable<User | null>

  constructor(private router : Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('currentUser')!) || null);
    this.user = this.userSubject.asObservable();
  }

  public get userValue():User |null {
    return this.userSubject.value
   }

  login(username: string, password: string){
    // var formData: FormData = new FormData();
    // formData.append('username', username);
    // formData.append('password', password);
    var formData = {'username':username, 'password':password};
    return this.http.post<any>('/authenticate', formData, {withCredentials: true}).pipe(
      map(
        user => {
          if (!user['jwtToken']) {
            this.userSubject.next(null);
            return throwError(() => 'Auth error');
          } else {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
          }
        }
      )
    )
  }

  logout() {
    // убить токен на бэке
    localStorage.removeItem('currenUser');
    this.userSubject.next(null);
    this.router.navigate(['/']);
  }

}
