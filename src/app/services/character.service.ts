import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../model/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private baseUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  public getCharacter(id: number): Observable<Character> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Character>(url);
  }

  public getRandomCharacter(): Observable<Character> {
    const randomId = Math.floor(Math.random() * 671) + 1;
    return this.getCharacter(randomId);
  }
}
