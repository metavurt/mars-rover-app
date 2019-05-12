import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RoverImagesService } from '../shared/services/rover-images.service';


@Component({
  templateUrl: './curiosity.component.html'
})
export class CuriosityComponent implements OnInit {
  name: string;
  sol: number;
  public imagedata;

  constructor(private route: ActivatedRoute, private roverImageService: RoverImagesService, private http: HttpClient) { }

  ngOnInit() {
    this.name = 'curiosity';
    this.roverImageService.getImages(this.name).subscribe( data => {
      this.imagedata = data.latest_photos;
    });
  }

}
