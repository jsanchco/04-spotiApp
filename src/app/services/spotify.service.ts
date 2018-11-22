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

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCHO1vJj6Qu3wyweZByp41w0lQGGkAEMuF-RGYWmlykqZ9-s9FwtGkN8o1yJAYZG-OlOi4GHAVFkVA9c5ABprLYFNjNRyJaBgynviXMRI898TFt3BHD4WXpZHPzNK7WNfRonSEo3Hck7Q',
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe( map ( data => {
        return data['albums'].items;
      }));

  }

  getArtista(termino: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCHO1vJj6Qu3wyweZByp41w0lQGGkAEMuF-RGYWmlykqZ9-s9FwtGkN8o1yJAYZG-OlOi4GHAVFkVA9c5ABprLYFNjNRyJaBgynviXMRI898TFt3BHD4WXpZHPzNK7WNfRonSEo3Hck7Q',
    });

    return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&market=ES&offset=0&limit=15`, { headers });

  }
}
