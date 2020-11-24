import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})

export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
    Authorization: 'Bearer BQBxCZh_-msUMiSGa1WR6aPXZyZxpuINQQl2kfAQTwBOEiT-Csr-pCFZIoUsYBCVX2ftjB3DA4gisZ_4VrtqftvKtWqBCfU6hQ9YmGRbvC7lUoIsNatm7e0AQxPhfWffe9MRDHUiPg'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
