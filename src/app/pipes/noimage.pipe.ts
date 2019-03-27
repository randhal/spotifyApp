import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( imagenes: any[]): string {
    // Validar si no viene nada
    if ( !imagenes ) {
      return 'assets/img/noimage.png';
    }

    // Validar si viene mas de 1
    if ( imagenes.length > 0 ) {
      return imagenes[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
  }

}
