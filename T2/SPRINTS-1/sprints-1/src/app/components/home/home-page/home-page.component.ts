import { Component } from '@angular/core';
import { SliderComponent } from "../../bands/slider/slider.component";
import { ConcertsListComponent } from '../../concerts/concerts-list/concerts-list.component';
import { ConcertsService } from '../../../services/concerts.service';

@Component({
  selector: 'app-home-page',
  imports: [SliderComponent, ConcertsListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(public concertsService: ConcertsService) { }

  getFeaturedConcerts = () => this.concertsService.getConcertsFeatured(4);
  getRecentConcerts = () => this.concertsService.getConcertsRecent(4);


}
