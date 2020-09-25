import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas: any[] = [];

  constructor( private spotify: SpotifyService ) { 
  }
 
 buscar(termino:string){
  console.log(termino)
  this.spotify.getArtista( termino )
    .subscribe( (resp:any) => {
      console.log(resp.artists.items);
      this.artistas = resp.artists.items;
    })
 }
}
