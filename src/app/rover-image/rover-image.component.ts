import { Component, Input } from '@angular/core';
import { RoverImage } from '../shared/models/rover-image';

@Component({
  selector: 'app-rover-image',
  templateUrl: './rover-image.component.html'
})
export class RoverImageComponent {

  @Input()
    image: RoverImage;
}

