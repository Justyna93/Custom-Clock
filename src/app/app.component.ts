import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ClockComponent } from './clock/clock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(injector: Injector) {
    // const element = createCustomElement(ClockComponent, { injector: injector });
    // customElements.define('custom-clock', element);


    // const clockEl: any = document.createElement('custom-clock') as any;
    // document.body.appendChild(clockEl);

    // Listen to the close event
    // clockEl.addEventListener('closed', () => document.body.removeChild(clockEl));

    // Set the message
    // clockEl.message = message;

    // Add to the DOM
  }
}
