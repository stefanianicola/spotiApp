import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

 newRealeses:any[] = [];
 loading:boolean;
 error:boolean;
 mensaje:string;

  constructor( private spotify: SpotifyService ) { 

    this.loading = true;
    this.error = false;
    this.spotify.getNewRealeses()
    .subscribe( (resp: any) => {
      this.newRealeses = resp;
      this.loading = false;
    }, (err) => {
      this.loading = false;
      this.error = true;
      this.mensaje = err.error.error.message;
    })
  }

  ngOnInit(): void {
  }

}
