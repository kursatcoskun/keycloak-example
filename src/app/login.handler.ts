import { KeycloakService } from './keycloak.service';
import { environment } from '../environments/environment';
import { KeycloakInitOptions } from 'keycloak-js';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginHandler {
  constructor(private keycloakService: KeycloakService) {}

  initalizeKeycloakInstance(): void {
    const keycloakConfig = environment.keycloakConfig;
    const appUrl = environment.appUrl;
    const initOptions = {
      redirectUri: appUrl,
    } as KeycloakInitOptions;
    this.keycloakService.initialize(
      this.keycloakService.createConfig(keycloakConfig),
      initOptions
    );
  }
}
