import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { CharacterService } from '../character/character.service';


@Component({
  selector: 'app-character-list',
  templateUrl: './app-character-list.component.html',
  styleUrls: ['./app-character-list.component.sass']
})

export class AppCharacterListComponent implements OnInit {
  hideDetails = true;
  characterFilter: string = '';
  characters: Array<Character>;

  constructor(private characterService: CharacterService) { }


  toggleDetails(): void {
    this.hideDetails = !this.hideDetails;
  }

  updateForce(character: Character, $event) {
    character.force = $event;
  }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }

}
