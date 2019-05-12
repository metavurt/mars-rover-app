import { Component, Input } from '@angular/core';
import { EntryListing } from '../shared/models/entry-listing';

@Component({
  selector: 'entry-listing',
  templateUrl: './entry-listing.component.html'
})
export class EntryListingComponent {

  @Input()
    entry: EntryListing;
}

