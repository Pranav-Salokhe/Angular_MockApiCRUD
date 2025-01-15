import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl:any = "https://65a7a65194c2c5762da7307e.mockapi.io/api/cities";
  constructor(private http:HttpClient) { }

  //To get All Record 
  get(){
    return this.http.get(this.baseurl);
  }
  
  //To get single record by id
  getbyid(id:number){
    return this.http.get(this.baseurl+"/"+id);
  }

  //To insert record
  post(body:any){
    return this.http.post(this.baseurl,body);
  }

  //To update record using id
  put(id:number,body:any){
    return this.http.put(this.baseurl+"/"+id,body);    
  }

  //To delete record using id
  delete(id:number){
    return this.http.delete(this.baseurl+"/"+id);
  }
}
