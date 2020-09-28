import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent  {

  artista:any = {};
  topTracks:any[] = [];
  loading:boolean;

  constructor( private router : ActivatedRoute,
                private spotify : SpotifyService ) { 
    this.router.params.subscribe( params => {
      this.getArtista(params['id']);
      this.getTopTrack(params['id']);
      this.loading = true;
    } )
  }

  getArtista( id:string ){
    this.spotify.getArtista( id )
      .subscribe( resp => {
        this.artista = resp;
        this.loading = false;
      })
  }

  getTopTrack( id:string) {
    this.spotify.getTopTrack( id )
      .subscribe( resp => {
        console.log(resp)
        this.topTracks = resp;
      } )
  }


}
