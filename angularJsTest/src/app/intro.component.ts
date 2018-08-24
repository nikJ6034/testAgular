import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  template: `
    <span>Hello my Name is {{title}}</span>
    <span>this time is {{date}}</span>
  `,
  styles: [`
    span {
      border: 1px ridge blue;
      padding: 5px;
    }
  `]
})

export class IntroComponent {
  title;
  date;
  constructor() {
    this.title = '장문익';
    this.date = new Date();
  }
}
