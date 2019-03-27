import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {
  artista: any = {};
  loadingArtist: boolean;
  topTracks: any[]  = []; // Una lista vacia
  // 2do paso cuando haces una redireccion - desde tarjetas.component.ts
  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {

    // Cuando se ejecuta el constructor mando el loading
    this.loadingArtist = true;
    // metodo para obtener los valores que se envio desde el otro componente (PARAMS)
    // se capturo el id porque en la interfaz anterior se le envio como parametro
    this.router.params.subscribe( params => {
      console.log(params.id);

      // LLamar al metodo (SERVICIO GETARTISTA)
      this.getArtista(params.id);
      this.getTopTracks(params.id);

    });
   }

   // Crear el metodo para llamar al artista seleccionado (SERVICIO GETARTISTA)
   getArtista(id: string) {

  // Cuando se ejecuta el constructor mando el loading
      this.loadingArtist = true;
      this.spotify.getArtist( id ).subscribe( data => {
        console.log(data);
        this.artista = data;
        this.loadingArtist = false;
      });
   }

   getTopTracks( id: string) {
    this.spotify.getTopTracks( id ).subscribe( tracks => {
      console.log(tracks);
      this.topTracks = tracks;
    });
   }
}
