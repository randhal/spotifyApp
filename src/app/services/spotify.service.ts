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
      Authorization: 'Bearer QC05xJUWkzQ0O3XIYwwcvZX35LxpYMzhHYLvr7oGqYghnyrAT8GrNLuCQ4CFT1V65dngqTFZXAkkoCen9w'
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
  }

  getArtist( id: string ) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks( id: string ) {
    // El servicio me bota una objeto. Usare pipe para poder transformar mi respuesta
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe( map(  data => data['tracks']) );
  }
}
