import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// la importacion de MAP = Filtra la informacion
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${query}`;  // Para no repetir codigo de la url

    const headers = new HttpHeaders({  // Arma el parametro de entrada
      Authorization: 'Bearer BQAAzS2OzhDhi35D9Pu0TYIoqf047CgU7frf2OvGCMCSuubL8HCE1EPK-x6z3u0HHHIQlcuVcWu-zd7tJt0SxC_yKN_QvFaF_UMXQ3X2ehQBwmV0UKIRt-u6gTx0TAZBNbbZdodSNRN80lrM1C0'
    });

    return this.http.get(url, {headers}); // El llamado del servicio
  }


  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items));

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    //   .pipe( map( data => {
    //     return data['albums'].items; // de la data busque la propiedad album y busque los items.
    //   }));
  }


  getArtistas( termino: string ) {

    return this.getQuery(`search?query=${ termino }&type=artist&market=PE&offset=0&limit=15`)
      .pipe( map(  data => data['artists'].items) );

    // return this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&market=PE&offset=0&limit=15`, { headers })
    //   .pipe( map( data => data['artists'].items ));
  }

  getArtist( id: string ) {
    return this.getQuery(`artists/${ id }`);
    // .pipe( map(  data => data['artists'].items) );
  }
}
