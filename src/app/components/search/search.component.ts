import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas: any[] = [];
  loading:boolean;

  constructor( private spotify: SpotifyService ) { 
    
  }
 
 buscar(termino:string){
  this.loading = true;
  this.spotify.getArtistas( termino )
    .subscribe( (resp:any) => {
      this.artistas = resp;
      this.loading = false;
    })
 }
}
