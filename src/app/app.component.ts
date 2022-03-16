import {Component, OnInit} from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isDisplayNone: boolean = false;

  ngOnInit(): void {

  }

  handleForm(event:any): void {
    if (event.value === '1') {
      this.isDisplayNone = true;
    } else {
      this.isDisplayNone = false;
    }
  }
}
