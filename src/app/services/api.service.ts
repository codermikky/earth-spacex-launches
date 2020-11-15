import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiService {
  private baseUrl = "https://api.spacexdata.com/v3/launches?limit=100";
  constructor(private http: HttpClient) {}
  getAllLaunches(state?) {
    let url = this.baseUrl;
    if (state) {
      for (let key of Object.keys(state)) {
        if (state[key] != "") {
          url = url + `&${key}=${state[key]}`;
        }
      }
    }
    return this.http.get(url);
  }
}
