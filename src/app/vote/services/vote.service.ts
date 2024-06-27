// vote.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from '../models/vote.model';
import { ConfidenceLevel } from '../models/vote.model';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private baseUrl = 'http://localhost:8082/pokerplanning/vote'; // Base URL of your Spring Boot API

  constructor(private http: HttpClient) { }

  
  createVote(cardValue: number, confidenceLevel: ConfidenceLevel): Observable<any> {
    const url = `${this.baseUrl}/add`; // Construct the complete URL for adding a vote
    return this.http.post<any>(url, { cardValue, confidenceLevel });
  }
  
  getAllVotes(): Observable<Vote[]> {
    return this.http.get<Vote[]>(`${this.baseUrl}/all`);
  }
  
  deleteVote(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  // addVote(vote: Vote): Observable<Vote> {
  //   return this.http.post<Vote>(`${this.baseUrl}/add`, vote);
  // }

  // updateVote(vote: Vote): Observable<Vote> {
  //   return this.http.put<Vote>(`${this.baseUrl}/update`, vote);
  // }


  // getVoteById(id: number): Observable<Vote> {
  //   return this.http.get<Vote>(`${this.baseUrl}/${id}`);
  // }

}
