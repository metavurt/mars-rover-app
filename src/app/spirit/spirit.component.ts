import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RoverImagesService } from '../shared/services/rover-images.service';

@Component({
  templateUrl: './spirit.component.html'
})
export class SpiritComponent implements OnInit {
  name: string;
  sol: number;
  imagedata: {};

  constructor(private route: ActivatedRoute, private roverImageService: RoverImagesService, private http: HttpClient) { }

  ngOnInit() {
    this.name = 'spirit';
    console.log(this.name);
    // this.roverImageService.getImages(this.name).subscribe( data => {
    //   this.imagedata = data[0];
    //   console.log(this.imagedata);
    // });
  }

  setCurrentRover() {
    //this.route.params.subscribe( params => this.name = params.name );
  }

}
