import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app/app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

  bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(FormsModule, ReactiveFormsModule)
  ]
}).catch(err => console.error(err));
