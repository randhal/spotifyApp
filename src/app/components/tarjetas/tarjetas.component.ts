import { Component, Input } from '@angular/core';
import { Router}  from '@angular/router'

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent  {
  // 1. Imput item para pasar el parametro a otro html "items"
  @Input() items: any[] = [];

  constructor( private router: Router) { }

  // Funcion click que obtiene el valor del ID ARTISTA
  verArtista( item: any ) {
    let artistaId;

    if ( item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    console.log(artistaId);

    // 1 - Router link - redirecciona a la nueva interfaz (ruta y parametro)
    // 2 - ActivatedRoute en artista.component.ts
    this.router.navigate(['/artist', artistaId]);
  }
}
