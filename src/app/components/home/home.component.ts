import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  // paises: any[] = [];  // Variable
  // Llamar a un servicio - GET
  // constructor( private http: HttpClient) {
  //   console.log('Constructor Hecho');
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //     .subscribe( (respuesta: any) => {
  //       this.paises = respuesta; // Obtiene la informaciondel servicio
  //       console.log(respuesta); // Muestra lo que responde el servicio
  //   });
  // }
  nuevasCanciones: any[] = []; // Variable para el servicio
  loading: boolean; // Variable para el loading

    constructor( private spotify: SpotifyService) {
      // llamado del loading
      this.loading = true;

      // llamado del servicio
      this.spotify.getNewReleases()
        .subscribe( (data: any) => {
         console.log(data);
         this.nuevasCanciones = data;
         this.loading = false; // cuando termina de cargar se borra el loading
      });
    }
}
