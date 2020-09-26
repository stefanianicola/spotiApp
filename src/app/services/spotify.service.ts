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
      'Authorization': 'Bearer BQAWrGyKGtNseeeSuAMfgAbkCg-R_R1pyH1_QodtdPjLslLVJyEfjZvqHS5iT625RO82LLlAAj3Y-6QtASk'
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
