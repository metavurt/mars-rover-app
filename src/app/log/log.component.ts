import { Component, OnInit } from '@angular/core';
import { LogsService } from '../shared/services/logs.service';
import { CategoriesService } from '../shared/services/categories.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EntryCategory } from '../shared/models/entry-category';

@Component({
  selector: 'app-log-entries',
  templateUrl: './log.component.html'
})
export class LogComponent implements OnInit {
  public entries;
  public categoryList;

  constructor(private logsService: LogsService, private categoriesService: CategoriesService, private http: HttpClient) { }

  ngOnInit() {
      this.logsService.getCategories()
      .subscribe((data) => {
        this.categoryList = data;
      },
        err => console.error(err),
        () => this.getPostsWithCategories()
      );
  }

  getPostsWithCategories() {
    this.logsService.getEntries()
      .subscribe( data => {
        console.log(data);
        this.entries = data;
      },
      err => console.error(err),
      () => console.log('all good'));
  }

}
