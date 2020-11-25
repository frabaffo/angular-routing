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
    Authorization: 'Bearer BQClMy331scAxeAq2tL2jAuKY6Un-IEyGA6k4dBdAzVNtLwivJ7WvHOZJnddsV8oiAG2G6LKv1b6scY_mMDTAxcBUBtzxHdTQ6R5Vsrc8A2yX_E6t4I3FXh-oB1-v6Q519jcbn7ixw'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
