import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private http: HttpClient,private http1:HTTP) { }
  graphData;
  url="http://103.1.82.29:808/api/"

  
  getdata(val){
     let headers = new HttpHeaders();
  //   return this.http.get('http://103.1.82.29:808/api/Dashboard/GetVehicleDetailByState?stateId='+val, { headers: headers }
  //  ).pipe(
  //    tap((res) => {
  //     // this.token = localStorage.setItem('token', res.token);
  //      //console.log(res);
  //    }),
  //  );
  this.http1.setDataSerializer('json');
return  this.http1.get(this.url+'Dashboard/GetVehicleDetailByState?stateId='+val, {}, { })
  .then(data => {

   return ((JSON.parse(data.data).Table));
   

  })
  }

  getMainMenu(){
    let headers = new HttpHeaders();
    let body={
      "ModuleId" :1,
      "PositionId" : 1,
      "LangId" : 1,
      "WebsiteId" : 1
  }
 //   return this.http.get('http://103.1.82.29:808/api/Dashboard/GetVehicleDetailByState?stateId='+val, { headers: headers }
 //  ).pipe(
 //    tap((res) => {
 //     // this.token = localStorage.setItem('token', res.token);
 //      //console.log(res);
 //    }),
 //  );
 this.http1.setDataSerializer('json');
return  this.http1.post(this.url+'Master/GetParentMenuDetails', body, { })
 .then(data => {
   //console.log(data)
  return ((JSON.parse(data.data)));
  

 })
 }
}