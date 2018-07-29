import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    ClockComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const element = createCustomElement(ClockComponent, { injector: this.injector });
    customElements.define('custom-clock', element);
  }
}
