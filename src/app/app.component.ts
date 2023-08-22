import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isProdEnabled = true;
  title = this.isProdEnabled?  'rick-and-morty': 'rick';
}
