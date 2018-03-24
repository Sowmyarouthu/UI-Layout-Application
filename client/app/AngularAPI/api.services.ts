import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import { Headers } from '@angular/http';
import {Injectable} from "@angular/core";

@Injectable()
export class Apiservices {
    
constructor(private http: Http){}
    
getdate(){
    
    return this.http.get("http://date.jsontest.com").map(res => res.json());
}

postdata (){
 const json = JSON.stringify({var1: "test",var2: 5});
 const params = "json="+json;
 const header = new Headers();
 header.append("content-type","application/x-www-form-urlencoded");

 return this.http.post("http://validate.jsontest.com",params,{headers: header})
 .map(res => res.json());
}

}
