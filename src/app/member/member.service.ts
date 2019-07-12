import { Injectable } from '@angular/core';
import { IMember } from './IMember';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class MemberService {
    constructor(private httpClient: HttpClient, private router: Router) {
    }
    
    baseUrl = 'http://localhost:3000/members';   

    getMembers(): Observable<IMember[]> {
        return this.httpClient.get<IMember[]>(this.baseUrl)
            .pipe(catchError(this.handleError));
    }

    getMember(id: number): Observable<IMember> {
        return this.httpClient.get<IMember>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {            
            console.error('Server Side Error :', errorResponse);
        }
        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
    }

    
}