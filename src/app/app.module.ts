import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { CuriosityComponent } from './curiosity/curiosity.component';
import { SpiritComponent } from './spirit/spirit.component';
import { RoverImageComponent } from './rover-image/rover-image.component';

import { RoverImagesService } from './shared/services/rover-images.service';



const defaultTitle = 'mars app rover';


const ROUTES = [
  { path: '', redirectTo: 'opportunity', pathMatch: 'full', data: { pageTitle: defaultTitle, pageHeader: ''} },
  { path: 'opportunity', component: OpportunityComponent, data: { pageTitle: defaultTitle + ' : about', pageHeader: 'opportunity'} },
  { path: 'curiosity', component: CuriosityComponent, data: { pageTitle: defaultTitle + ' : curiosity', pageHeader: 'log'} },
  { path: 'spirit', component: SpiritComponent, data: { pageTitle: defaultTitle + ' : spirit', pageHeader: 'log'} }
];

@NgModule({
  declarations: [
    AppComponent,
    CuriosityComponent,
    OpportunityComponent,
    SpiritComponent,
    RoverImageComponent
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
  providers: [RoverImagesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
 }
