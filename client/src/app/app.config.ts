import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
//Section 7/28
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
//Section 7/28
// import { errorInterceptor } from './interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    //Section 7/28
    // { provide: HTTP_INTERCEPTORS, useClass: errorInterceptor, multi: true },
  ],
};
