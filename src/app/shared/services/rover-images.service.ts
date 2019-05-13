import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RoverImage } from '../models/rover-image';
import { RoverBatch } from '../models/rover-batch';

const baseAPI = environment.apiUrl;
const baseKey = environment.apiKey;

// example https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=

@Injectable()
export class RoverImagesService {

  constructor(private http: HttpClient) { }

  // if no sol specified, get latest from latest_photos
  // batch of ten(?), but with latest sol as default to show
  // must have rover name as well

  getImages(rover: string) {
      // get image stream based on rover name
      return this.http.get<RoverBatch>(baseAPI + rover + '/latest_photos?api_key=' + baseKey);
  }

  getImagesBySol(rover: string, sol: number) {
    return this.http.get<RoverBatch>(baseAPI + rover + '/photos?sol=' + sol + '&api_key=' + baseKey);
  }

  getImagesByEarthDate(rover: string, edate: string) {
    return this.http.get<RoverBatch>(baseAPI + rover + '/photos?earth_date=' + edate + '&api_key=' + baseKey);
  }
}
