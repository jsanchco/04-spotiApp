import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Servicio de Spotify Listo!!!');
  }

  getQuery ( query: string) {
    const url = `https://api.spotify.com/v1${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCBxa9ETqZOspFQXN7SeKlnWTvCMKx9OX6gTel_MB9w0mpgZyK8ZrY0r1nZHo6Mt3IFxPhJ9D681JsV7ZtfJp1ymGJmb9DVuWgG_tnN5zEqBN181HX43xmSHDT14tFRtjImMmZRAh6oqQ',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('/browse/new-releases').pipe( map ( data =>  data['albums'].items ));

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQDHwujQPdSBoLFpdRlPrDrDcYsZzngFuY9j5VKsctfPT3RAoRmGiL_GdVG2AQKh47nr7qHpINhEQ9TLzqjZM3cS6LYJW6fSXFlBT9HOB9aqREgScbFqvtMC-Jc7iJDpLB-IH0ai_KTZMQ',
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    //   .pipe( map ( data =>  data['albums'].items ));

  }

  getArtistas(termino: string) {

    return this.getQuery(`/search?query=${ termino }&type=artist&market=ES&offset=0&limit=15`).pipe( map ( data => data['artists'].items ));

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQDHwujQPdSBoLFpdRlPrDrDcYsZzngFuY9j5VKsctfPT3RAoRmGiL_GdVG2AQKh47nr7qHpINhEQ9TLzqjZM3cS6LYJW6fSXFlBT9HOB9aqREgScbFqvtMC-Jc7iJDpLB-IH0ai_KTZMQ',
    // });

    // return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&market=ES&offset=0&limit=15`, { headers })
    //   .pipe( map ( data => data['artists'].items ));

  }

  getArtista(id: string) {

    return this.getQuery(`/artists/${ id }`);
      // .pipe( map ( data => data['artists'].items ));

  }

  getTopTracks(id: string) {

    return this.getQuery(`/artists/${ id }/top-tracks?country=ES`)
       .pipe( map( data => data['tracks'] ));

  }
}
