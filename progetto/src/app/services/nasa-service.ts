import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})

export class NasaService {
    constructor(private http: HttpClient) {}
    
  getNeo() {
    return this.http.get(`https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=${environment.nasaKey}`);
  }
}