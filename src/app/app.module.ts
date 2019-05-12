import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LogComponent } from './log/log.component';
import { EntryListingComponent } from './entry-listing/entry-listing.component';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { LogsService } from './shared/services/logs.service';
import { RoverImagesService } from './shared/services/rover-images.service';

import { CategoriesService } from './shared/services/categories.service';


const defaultTitle = 'mars app rover';


const ROUTES = [
  { path: '', redirectTo: 'work', pathMatch: 'full', data: { pageTitle: defaultTitle, pageHeader: ''} },
  { path: 'about', component: AboutComponent, data: { pageTitle: defaultTitle + ' : about', pageHeader: 'about'} },
  { path: 'log', component: LogComponent, data: { pageTitle: defaultTitle + ' : log', pageHeader: 'log'} }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LogComponent,
    EntryListingComponent,
    EntryPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'mars-rover-app'}),
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [LogsService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
 }
