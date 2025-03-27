import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:``,
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  value = "Dnnam athi...!";

  changeMe(){
    this.value = 'Welasanin iwarakranawa kiwwa, dn 11ath wela..! Ohama thamai jeewithea';
  }
}
