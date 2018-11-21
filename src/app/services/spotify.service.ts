import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Servicio de Spotify Listo!!!');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCbfnbEj9V-rpVnDVkd2yx0kgwVhJHD9XuR5a886j5BGFnaZhLdCkU0v1J3k2lkM3vk_Jz6Jfto8vuYJC67KtTMx182AbYKsldfrhC3mYrjAu_SdmdymzmkRnfJ_Kp6bGR26wvwIDPTPA',
    });

    this.http.get('	https://api.spotify.com/v1/browse/new-releases', { headers })
    .subscribe( data => {
      console.log( data );
    });
    
  }
}
