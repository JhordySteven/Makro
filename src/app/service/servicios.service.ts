import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{RutaMvc} from './configGeneral';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private fApiRest:HttpClient) { }
  
  fapiPost(api,obj:any):Observable<any>{
    return this.fApiRest.post(RutaMvc+api,obj,{responseType: 'text'});
  }

  fapiGet(api){
    return this.fApiRest.get(RutaMvc+api);
  }

  fapiPut(api,obj:any):Observable<any>{
    return this.fApiRest.put(RutaMvc+api,obj,{responseType: 'text'});
  }
  
  fapiGetParameter(api,obj){
    return this.fApiRest.get(RutaMvc+api+"/"+obj);
  }
}
