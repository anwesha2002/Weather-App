import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  /*private URL = 'https://api.openweathermap.org/data/2.5/weather';
  private apikey = 'a3f522eb9ba18b68492981ed218df3f2';*/

  constructor(private http: HttpClient) { }

  /*getDatabyLocation(city: any) {

    let params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('apiid', this.apikey)

    const url = '${this.URL}?q=${city}&appid=${this.apikey}';

    return this.http.get(url);
}*/
}
