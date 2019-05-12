import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Data } from '@angular/router';
import { EntryCategory } from '../models/entry-category';

@Injectable()
export class CategoriesService {
    private apiURL = environment.apiURL + 'categories';
    private categoryList: Data;
    private observable: Observable<any>;
    constructor(private http: HttpClient) { }

    getCategories() {
        if (this.categoryList) {
            return of(this.categoryList);
        } else {
            this.categoryList = this.http.get<EntryCategory>(this.apiURL);
        }
    }

    getCategoryByID(id: number) {
        return this.http.get<EntryCategory>(this.apiURL + '/' + id);
    }
}

