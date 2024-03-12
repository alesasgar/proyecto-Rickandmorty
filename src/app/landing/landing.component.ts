import { Component, OnInit } from '@angular/core';
import { Character } from '../model/Character';
import { Router } from '@angular/router';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  titulo:string = "Rick And Morty API";
  data: Character[] = [];
  pageInfo: any;
  page: number = 1;

  constructor(private characterService:CharacterService , private router: Router) {}

  ngOnInit(): void {
    this.llenarData();
  }


  llenarData(){
    for (let i = 0; i < 20; i++) {
      this.characterService.getRandomCharacter().subscribe(data => {
        this.data.push(data);
      });
    }
  }

  showCharacterDetails(characterId: number): void {
    this.router.navigate(['character', characterId]);
  }


}
