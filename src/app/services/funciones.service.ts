import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  constructor(private http: HttpClient) { }

  get(url:string){
    return this.http.get(environment.API_URL + url);
  }

  getOne(url:string, id:number){
    return this.http.get(environment.API_URL + url+ id);
  }

  getForParam(url:string , $id){
    return this.http.post(environment.API_URL + url,$id);
  }
  
  post(url:string, data){
    return this.http.post(environment.API_URL + url,data);
  }
  
  put(url:string, data){
    return this.http.put(environment.API_URL + url,data);
  }
}
