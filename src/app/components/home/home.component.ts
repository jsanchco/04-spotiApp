import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string;


  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.error = false;
    this.messageError = "";

    this.spotify.getNewReleases().subscribe( (data: any) => {
      this.messageError = "";
      this.loading = false;
      this.nuevasCanciones = data;        
    }, ( errorServicio ) => {
      this.loading = false;
      this.error = true;
      this.messageError = errorServicio.error.error.message;
    } ); 

  }
}
