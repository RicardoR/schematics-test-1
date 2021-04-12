import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const RESOURCE_URL = '/api/users';

@Injectable({
    provideIn: 'root'
})
export class CrudRoleCrudResourceService {
    
    constructor(private httpClient: HttpClient) {}

    
    findOne(id: string): Observable<CrudRole> {
        return this.httpClient.get<CrudRole>(`${RESOURCE_URL}/${id}`);
    }
    
    
    findAll(): Observable <CrudRole [] > {
        return this.httpClient.get<CrudRole[]>(RESOURCE_URL);
    }
}

export interface CrudRole {
    prop: string;
}