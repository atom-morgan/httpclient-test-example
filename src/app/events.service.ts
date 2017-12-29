import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EventsService {

  constructor(private http: HttpClient) { }

  create(event) {
    return this.http.post('http://localhost:8080/api/events', event);
  }

}
