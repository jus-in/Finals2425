import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Ensure routes are imported correctly

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes) // Provide the router configuration
  ]
};