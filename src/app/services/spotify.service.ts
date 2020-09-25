import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    
   }

   getQuery( query:string ){
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD4OSJdN1OhjzIisR4N7oO4WCLVvy-Fwa1giplystJBZF8Tk8BqGPyHqG0-mjc08iyBteOWbST6D4npmBs'
    });

    return this.http.get(url, { headers });
   }

    getNewRealeses(){
    return this.getQuery('browse/new-releases?limit=20')
          .pipe( map( (data:any) => data.albums.items));
   }

   getArtista( termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
            .pipe( map( (data:any) => data['artists'].items));
   }
}
