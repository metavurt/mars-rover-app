import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogsService } from '../shared/services/logs.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html'
})
export class EntryPageComponent implements OnInit {
  id: number;
  slug: string;
  pagedata: {};

  constructor(private route: ActivatedRoute, private logsService: LogsService, private meta: Meta) {
    // Set <meta> tags for the page
    meta.addTags([
      { name: 'author', content: 'Billy ONeal' },
      { name: 'description', content: 'Some form of descriptive description.' },
    ]);
   }

  ngOnInit() {
    // this.setCurrentID();
    // this.logsService.getEntryByID(this.id).subscribe( data => {
    //   this.pagedata = data;
    // });
    this.setCurrentSlug();
    this.logsService.getEntryBySlug(this.slug).subscribe( data => {
      this.pagedata = data[0];
    });
  }

  setCurrentID() {
    this.route.params.subscribe( params => this.id = params.id );
  }

  setCurrentSlug() {
    this.route.params.subscribe( params => this.slug = params.slug );
  }
}
