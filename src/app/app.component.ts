import { Component } from '@angular/core';
import { KeycloakService } from './keycloak.service';
import { environment } from '../environments/environment';
import {KeycloakInstance, KeycloakLoginOptions} from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'keycloak-example';

  constructor(private keycloakService: KeycloakService) {}

  login(): void {
    const appUrl = environment.appUrl;

    const keycloakLoginOptions = {
      redirectUri: appUrl,
    } as KeycloakLoginOptions;

    this.keycloakService.login(
      this.keycloakService.getKeycloakInstance(),
      keycloakLoginOptions
    );
  }

  get keycloakInstance(): KeycloakInstance {
    return this.keycloakService.getKeycloakInstance();
  }
}
