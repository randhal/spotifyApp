import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artistas: any [] = [];
  loading: boolean;
  constructor( private spotify: SpotifyService) {
   }
  buscar(termino: string) {
    console.log(termino); // Muestra en consola lo que escribio en el buscador
    this.loading = true; // Busca cuando se empieza a buscar (LOADING)
    this.spotify.getArtistas(termino)
      .subscribe( (data: any) => {
         console.log(data); // Muestra la informacion que tiene el servicio
         this.artistas = data;
         this.loading = false; // cuando termina de cargar se borra el loading (LOADING)
    });
  }
}
