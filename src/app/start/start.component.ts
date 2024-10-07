import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
    catImage: string = "./images/cat.jpg";
    catImageAlt: string = "Kattunge i skogen, bild från pixabay.com"
}
