import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBIQKPk3Kmyv-08iGkN8lpVDQ3xt_ybBT0ugWV5RRMD8mDf5akvJEB-QG-bsCWewMU4nxN5FqfjaKeAiLyuroSqecn2elRLdEgldyrmzazE2FG25J1vrtpAhhuUdaFCzPijjzH6BBbT5pOWuM4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }


  getArtist( termino: string ) {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAeXCvPOpI1oF0XmFRTLpL51tDFcPwagJ4m3KxKCOdbxyjQFxmehww9y6PkDUvdaMEIGcqDEyyc5ffpMlqdmVtPTtCrwUtivYGwB7ZJEfh64OQGeAXplp2P1yWEodIg22WuF4D2g7mkUKUIcPc'
    });

    return this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&market=PE&offset=0&limit=15`, { headers });

  }
}
