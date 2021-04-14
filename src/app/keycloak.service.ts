import { Injectable } from '@angular/core';
import * as KeycloakInterface from 'keycloak-js';
import {
  KeycloakInitOptions,
  KeycloakInstance,
  KeycloakLoginOptions,
  KeycloakPromise,
} from 'keycloak-js';
import { from, Observable, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';

export interface ConfigOptions {
  clientId: string;
  realm: string;
  url: string;
}

const Keycloak = (KeycloakInterface as any).default || KeycloakInterface;

@Injectable({ providedIn: 'root' })
export class KeycloakService {
  keycloakInstance!: KeycloakInstance;

  createConfig(configOptions: ConfigOptions): KeycloakInstance {
    this.keycloakInstance = Keycloak(configOptions);
    return this.keycloakInstance;
  }

  initialize(
    keycloakInstance: KeycloakInstance,
    loginOptions: KeycloakInitOptions
  ): Observable<KeycloakInstance> {
    return from(keycloakInstance.init(loginOptions)).pipe(
      mapTo(keycloakInstance)
    );
  }

  login(
    keycloakInstance: KeycloakInstance,
    loginOptions: KeycloakLoginOptions
  ): void {
    keycloakInstance.login(loginOptions);
  }

  getKeycloakInstance(): KeycloakInstance {
    return this.keycloakInstance;
  }
}
