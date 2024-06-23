import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';


export const appConfig: ApplicationConfig = {
  providers: [

    provideRouter(routes),   
    importProvidersFrom(HttpClientModule),
    provideAnimations(),

    provideToastr({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    provideClientHydration(),
    provideHttpClient()
  ],
};
