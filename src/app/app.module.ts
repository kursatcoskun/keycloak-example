import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginHandler} from './login.handler';

export const loginHandlerFactory = (loginHandler: LoginHandler) => (): void => {
  return loginHandler.initalizeKeycloakInstance();
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [LoginHandler],
      multi: true,
      useFactory: loginHandlerFactory,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {
}
