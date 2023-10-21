import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// @Component({
//     selector: 'app-root',
//     templateUrl: './components/login/login.component.html',
//     styleUrls: ['./components/login/login.component.css'],
//     template: `<label>Введите имя:</label>
//                  <input [(ngModel)]="name" placeholder="name">
//                  <h1>Добро пожаловать {{name}}!</h1>`
// })
export class AppComponent { 
    title= 'first-app';
}