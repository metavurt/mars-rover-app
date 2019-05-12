import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { EntryListing } from '../models/entry-listing';
import { EntryPage } from '../models/entry-page';
import { EntryCategory } from '../models/entry-category';

const postAPI = environment.apiURL + 'posts';
const categoryAPI = environment.apiURL + 'categories';

@Injectable()
export class RoverImagesService {

  constructor(private http: HttpClient) { }

  // if no sol specified, get default stream
  // batch of ten(?), but with latest sol as default to show

  getImages() {
      // get image stream based on rover id
  }

  getEntries() {
    return this.http.get<EntryListing>(postAPI);
  }
  getEntryById(id: number) {
    return this.http.get<EntryPage>(postAPI + '/' + id);
  }

  getCategories() {
    return this.http.get(categoryAPI);
  }
  getCategoryById(id: number) {
    return this.http.get<EntryCategory>(categoryAPI + '/' + id);
  }

  getEntryBySlug(slug: string) {
    return this.http.get<EntryPage>(postAPI + '?slug=' + slug);
  }
}
