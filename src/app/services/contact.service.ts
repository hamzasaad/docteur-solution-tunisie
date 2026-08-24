import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ContactRequest, ContactResponse } from '../models/contact-request.model';

/**
 * Talks to the Spring Boot backend (`POST /api/contact`), which validates
 * the payload and sends the email server-side. Swap `environment.apiUrl`
 * to point at another backend without touching the component.
 */
@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly endpoint = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) {}

  send(request: ContactRequest): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(this.endpoint, request);
  }
}
