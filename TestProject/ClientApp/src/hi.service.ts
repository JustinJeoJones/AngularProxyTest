import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HiService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getHi():any{
    return this.http.get(this.baseUrl + "api/Custom/hi");
  }
}
