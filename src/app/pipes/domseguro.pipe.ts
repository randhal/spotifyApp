import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) { }

  transform( value: string): any {

    // Consumir el estilo de spotify, se agrego en constante la ruta y solamente se envia el valor
    // esta funcionalidad es para artistas.component.html
    const url = 'https://open.spotify.com/embed/album/';
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
