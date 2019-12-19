import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  config: any;
  configFile = "assets/config.json";

  getSettings(): Promise<any> {
    return this.http.get(this.configFile).toPromise().then(
      (data: any) => {
        this.config = data;
        console.log(this.config);
      }
    )
  }

  constructor(private http: HttpClient) { }
}
