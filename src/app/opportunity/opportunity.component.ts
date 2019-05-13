import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RoverImagesService } from '../shared/services/rover-images.service';


@Component({
  templateUrl: './opportunity.component.html'
})
export class OpportunityComponent implements OnInit {
  name: string;
  sol: number;
  public imagedata;
  public currSol;
  public currEarthdate;

  public minDate = new Date(2004, 1, 25, 0, 0); // 2004-01-25
  public maxDate = new Date(2018, 6, 11, 0, 0); // 2018-06-11

  constructor(private route: ActivatedRoute, private roverImageService: RoverImagesService, private http: HttpClient) { }

  private d: string;
  private m: string;
  private y: string;

  public formattedDate: string;

  ngOnInit() {
    this.name = 'opportunity';
    this.roverImageService.getImages(this.name).subscribe( data => {
      this.imagedata = data.latest_photos;
      this.currSol = this.imagedata[0].sol;
      this.currEarthdate = this.imagedata[0].earth_date;
    },
      err => console.error(err)
    );
  }

  onChangeDate(data) {
    this.d = data.getDate();
    this.m = data.getMonth();
    this.y = data.getFullYear();
    this.formattedDate = this.y + '-' + this.m + '-' + this.d;
    this.getImagesByDate();
  }

  getImagesByDate() {
    this.roverImageService.getImagesByEarthDate(this.name, this.formattedDate ).subscribe( data => {
      this.imagedata = data.photos;
      if (this.imagedata.length > 0) {
        this.currSol = this.imagedata[0].sol;
        this.currEarthdate = this.imagedata[0].earth_date;
      } else {
        this.imageRetrievalEmpty();
      }
    },
      err => this.imageRetrievalError()
    );
  }

  imageRetrievalError() {
    console.log('error in retrieving images. recheck connection');
  }

  imageRetrievalEmpty() {
    console.log('no images for this date');
  }


}
