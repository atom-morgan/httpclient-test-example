import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EventsService } from './events.service';

describe('EventsService', () => {
  let eventsService: EventsService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventsService]
    });

    eventsService = TestBed.get(EventsService);
    http = TestBed.get(HttpTestingController)
  });

  it('should be created', () => {
    expect(eventsService).toBeTruthy();
  });

  describe('create', () => {
    it('should return an event object with a valid event details', () => {
      let event = {
        '_creator': '58dab4f21342131b8c96787f',
        'title': 'My first event',
        'description': 'My first description',
        'city': 'Atlanta',
        'state': 'GA',
        'startTime': '2017-04-01T19:00:00.000Z',
        'endTime': '2017-04-01T20:00:00.000Z',
        'suggestLocations': true,
      };
      let eventResponse = {
        '__v': 0,
        '_creator': '58dab4f21342131b8c96787f',
        'title': 'My first event',
        'description': 'My first description',
        'city': 'Atlanta',
        'state': 'GA',
        'startTime': '2017-04-01T19:00:00.000Z',
        'endTime': '2017-04-01T20:00:00.000Z',
        '_id': '599248fcae40f64d87f978ed',
        'suggestLocations': true,
        'members': ['58dab4f21342131b8c96787f']
      };
      let response;

      eventsService.create(event).subscribe((res) => {
        response = res;
      });

      http.expectOne('http://localhost:8080/api/events').flush(eventResponse);
      expect(response).toEqual(eventResponse);
    });
  });
});
