import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  paises: any[] = [];  // Variable
  nuevasCanciones: any[] = [];
  // Llamar a un servicio - GET
  // constructor( private http: HttpClient) {
  //   console.log('Constructor Hecho');
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //     .subscribe( (respuesta: any) => {
  //       this.paises = respuesta; // Obtiene la informaciondel servicio
  //       console.log(respuesta); // Muestra lo que responde el servicio
  //   });
  // }

    constructor( private spotify: SpotifyService) {

      this.spotify.getNewReleases()
        .subscribe( (data: any) => {
         console.log(data.albums.items);
         this.nuevasCanciones = data.albums.items;
      });
    }

}
