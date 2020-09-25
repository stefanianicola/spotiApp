import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

 newRealeses:any[] = [];

  constructor( private spotify: SpotifyService ) { 
    this.spotify.getNewRealeses()
    .subscribe( (resp: any) => {
      this.newRealeses = resp;
    })
  }

  ngOnInit(): void {
  }

}
