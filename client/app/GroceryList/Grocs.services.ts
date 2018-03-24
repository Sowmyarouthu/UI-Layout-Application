import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Grocs } from '../shared/models/grocs.model';
import grocs from '../../../server/models/grocs';

@Injectable()
export class Grocsservices {
    constructor(private http: HttpClient){

    }
    addGrocs(grocs: Grocs): Observable<Grocs> {
        return this.http.post('/api/grocs', grocs);
    }
    getGroces(): Observable<Grocs[]>{
        return this.http.get<Grocs[]>('/api/groces');
    }
   
    deleteGrocs(grocs: Grocs):Observable<string>{
        return this.http.delete(`/api/grocs/${grocs._id}`, {responseType: 'text'});
    }
    editGrocs(grocs: Grocs): Observable<string>{
        return this.http.put(`/api/grocs/${grocs._id}`, grocs, {responseType: 'text'});
    }

    sendemail(grocs:any):Observable<string>{
        return this.http.post(`/api/email`, grocs, {responseType: 'text'});
    }
}