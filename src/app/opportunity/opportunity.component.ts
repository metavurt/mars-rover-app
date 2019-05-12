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
  imagedata: {};

  constructor(private route: ActivatedRoute, private roverImageService: RoverImagesService, private http: HttpClient) { }

  ngOnInit() {
    this.name = 'opportunity';
    console.log(this.name);
    // this.setCurrentRover();
    // this.roverImageService.getImages(this.name).subscribe( data => {
    //   this.imagedata = data[0];
    //   console.log(this.imagedata);
    // });
  }

  // setCurrentRover() {
  //   this.route.params.subscribe( params => this.name = params.name );
  // }

}
