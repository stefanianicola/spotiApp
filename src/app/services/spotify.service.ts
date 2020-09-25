import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    
   }

    getNewRealeses(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAxp9B06eI9MdGgHH40YruKqfDenLKJc2hO5hmClo5o1XWl6w_0RccHCALjfwY_pZ6aan4fwWgNPmOf4fo'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
   }

   getArtista( termino:string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAxp9B06eI9MdGgHH40YruKqfDenLKJc2hO5hmClo5o1XWl6w_0RccHCALjfwY_pZ6aan4fwWgNPmOf4fo'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });
   }
}
